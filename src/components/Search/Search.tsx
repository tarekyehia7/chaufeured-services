import React, { useState } from 'react';
import { AutocompleteChangeDetails, AutocompleteChangeReason } from '@material-ui/lab';
import { useDispatch } from 'react-redux';

import { 
    Autocompleter, 
    DateTimePicker, 
    Duration, 
    CTAButton 
} from '../atom';
import { AutocompleteResponseType } from '../../types/search';
import { OfferType } from '../../types/offers';
import { redirectToOffersAction } from '../../store/actions';
import { isValidDuration } from '../../helpers';
import { useService } from '../../hooks/useService';
import { AppRestServices } from '../../api/AppRestServices';
import {
    Container,
    ButtonContainer,
} from './Search.styled';

export const Search = () => {
    const [autocompleterValue, setAutocompleterValue] = useState<string>('');
    const [dateTimePickerValue, setDateTimePickerValue] = useState<string>('');
    const [durationValue, setDurationValue] = useState<string>('1');
    const [selectedPlaceId, setSelectedPlaceId] = useState<string>('');

    const dispatch = useDispatch();

    const { result: autocompleterData } = useService<AutocompleteResponseType[]>(
        `${AppRestServices.myDriverAutocomplete}?searchString=${autocompleterValue}`, 
        { bypass: autocompleterValue.length > 0 }
    );

    const handleAutoCompleterOnChange = (event: React.ChangeEvent<{}>, value: string = '') => {
        setAutocompleterValue(value === 'undefined' ? '' : value);
    }

    const handleOnChangeObject = (event: React.ChangeEvent<{}>, value: any, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<AutocompleteResponseType> | undefined) => {
        setSelectedPlaceId(details?.option?.placeId ?? '');
    }

    const handleOnClick = () => {
        if (!selectedPlaceId || !dateTimePickerValue || !isValidDuration(Number(durationValue))) return;
        dispatch(redirectToOffersAction({
            originPlaceId: selectedPlaceId,
            selectedStartDate: dateTimePickerValue,
            duration: durationValue.toString(),
            type: OfferType.Duration
        }));
    };

    const onDatePickerChange = (event: any) => {
        setDateTimePickerValue(event.target.value);
    }

    const onDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDurationValue(event.target.value);
    };

    return (
        <Container data-testid="search-container">
            <Autocompleter
                data={autocompleterData ?? []}
                onInputChange={handleAutoCompleterOnChange}
                onChange={handleOnChangeObject}
            />
            <DateTimePicker
                value={dateTimePickerValue}
                onChange={onDatePickerChange}
            />
            <Duration
                value={durationValue}
                onChange={onDurationChange}
            />
            <ButtonContainer>
                <CTAButton value='Search' onClick={handleOnClick}/>
            </ButtonContainer>
        </Container>
    );
};