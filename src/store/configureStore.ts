import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import history from '../history';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const isoMiddlewares = [routerMiddleware(history)];
const middlewares = [...isoMiddlewares, sagaMiddleware];

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
);

const configureStore = () => {
  const store = createStore(
      rootReducer,
      enhancer
    );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;