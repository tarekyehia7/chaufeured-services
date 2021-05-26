import { takeLatest, put } from 'redux-saga/effects';
import { replace } from 'connected-react-router';
import queryString from 'query-string';

import { REDIRECT_TO_OFFERS_START } from '../actions/constants';
import {
    offersStartAction,
    redirectToOffersActionFail
} from '../actions/actions';
import { OfferType } from '../../types/offers';
import { PATH_OFFERS } from '../../routes';

function* redirectToOffers({ payload: offers }: ReturnType<typeof offersStartAction>) {
    try {
            const {
                originPlaceId,
                selectedStartDate,
                duration,
            } = offers
            const urlParams = {
                destination: originPlaceId,
                startDate: selectedStartDate,
                duration: duration,
                type: OfferType.Duration
            };
   
            yield put(replace(`${PATH_OFFERS}?${queryString.stringify(urlParams)}`));
    } catch (error) {
        yield put(redirectToOffersActionFail());
    }  
};

export default function* searchSaga() {
    yield takeLatest(REDIRECT_TO_OFFERS_START, redirectToOffers);
};
