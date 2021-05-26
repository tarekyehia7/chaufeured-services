import { createSelector } from 'reselect';

import { ReducerState } from '../reducers/rootReducer';
import { Offer } from '../../types/offers';

const selectOffers = (state: ReducerState): Offer[] => state?.offers?.offersData;
export const offersSelector = createSelector(selectOffers, (offers) => offers ?? []);

const selectIsLoading = (state: ReducerState): boolean => state?.offers?.isLoading;
export const offersIsLoadingSelector = createSelector(selectIsLoading, (isLoading) => isLoading);