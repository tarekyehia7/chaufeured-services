import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux';
import offersReducer, { OffersState } from './offersReducer';
import history from '../../history';


export type ReducerState = {
    offers: OffersState;
}

const rootReducer = combineReducers({
  offers: offersReducer,
  router: connectRouter(history),
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;