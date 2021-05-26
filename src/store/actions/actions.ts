import { createAction } from 'redux-actions';
import {
    START_OFFERS_REQUEST,
    RECEIVE_OFFERS_SUCCESS,
    RECEIVE_OFFERS_FAIL,

    REDIRECT_TO_OFFERS_START,
    REDIRECT_TO_OFFERS_FAIL,
} from './constants';
import {
    OffersRequestBody,
    Offer,
} from '../../types/offers';

export const offersStartAction = createAction(START_OFFERS_REQUEST);
export const offersSuccessAction = createAction<Offer[]>(RECEIVE_OFFERS_SUCCESS);
export const offersFailAction = createAction(RECEIVE_OFFERS_FAIL);


export const redirectToOffersAction = createAction<OffersRequestBody>(REDIRECT_TO_OFFERS_START);
export const redirectToOffersActionFail = createAction(REDIRECT_TO_OFFERS_FAIL);