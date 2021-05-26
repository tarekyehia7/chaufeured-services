import { all, fork } from 'redux-saga/effects';
import offersSaga from './offersSaga';
import searchSaga from './searchSaga';

export default function* rootSaga() {
  yield all([fork(offersSaga), fork(searchSaga)]);
}
