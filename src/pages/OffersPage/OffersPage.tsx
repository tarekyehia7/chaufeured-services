import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { offersSelector, offersIsLoadingSelector } from '../../store/selectors/offers';
import { OfferCard } from '../../components/OfferCard/OfferCard';
import { PATH_START } from '../../routes';
import { offersStartAction } from '../../store/actions';
import {
    GoBackLink,
    Spinner,
    Cards,
} from './OffersPage.styled';


const OffersPage = () => {
    const dispatch = useDispatch();
    const offers = useSelector(offersSelector);
    const isLoading = useSelector(offersIsLoadingSelector);

    useEffect(() => {
        dispatch(offersStartAction());
    }, [dispatch]);

    return (
        <>
        <GoBackLink to={PATH_START}>Go Back</GoBackLink>
        {isLoading &&
            <Spinner />
        }
        {!isLoading  &&
            <Cards>
                {
                    offers.map((offer, id) => <OfferCard key={id} offer={offer} />)
                }
            </Cards>
        }
        </>
    );
};

export default OffersPage;