import { Offer } from '../../types/offers';
import {
    START_OFFERS_REQUEST,
    RECEIVE_OFFERS_SUCCESS,
    RECEIVE_OFFERS_FAIL,
} from '../actions/constants';

export interface OffersState {
  offersData: Offer[];
  isLoading: boolean;
}

const initialState: OffersState = {
    offersData: [],
    isLoading: false
};

type Action = {
    type: typeof START_OFFERS_REQUEST | typeof RECEIVE_OFFERS_SUCCESS | typeof RECEIVE_OFFERS_FAIL;
    payload: Offer[];
}

export default function offersReducer(
  state: OffersState = initialState,
  action: Action
): OffersState {
  switch (action.type) {
    case START_OFFERS_REQUEST:
      return {
        ...state, 
        isLoading: true
      };
    case RECEIVE_OFFERS_SUCCESS:
      return {
        offersData: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
