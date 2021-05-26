import { takeLatest, call, put } from 'redux-saga/effects';
import { replace } from 'connected-react-router';
import queryString from 'query-string';

import { START_OFFERS_REQUEST } from '../actions/constants';
import {
    offersSuccessAction,
    offersFailAction,
} from '../actions';
import { postOffers } from '../../api/calls/offers';
import { Offer, ErrorObject, OffersRequestBody, OfferType } from '../../types/offers';
import { PATH_START } from '../../routes';

function* onLoadOffers() {
    try {
        const urlParams = queryString.parse(window.location.search);
        const offers: OffersRequestBody = {
            originPlaceId: urlParams?.destination as string,
            selectedStartDate: urlParams?.startDate as string,
            duration: urlParams?.duration as string,
            type: OfferType.Duration,
        };
        const data: Offer[] | ErrorObject = yield call(postOffers, offers);
        if ((data as ErrorObject)?.errorCode) {
            yield put(offersFailAction(data));
            yield put(replace(PATH_START));
        } else {
            yield put(offersSuccessAction(data as Offer[]));
        }
    } catch (error) {
        yield put(offersFailAction(error));
        yield put(replace(PATH_START));
    }  
};

export default function* offersSaga() {
    yield takeLatest(START_OFFERS_REQUEST, onLoadOffers);
};
