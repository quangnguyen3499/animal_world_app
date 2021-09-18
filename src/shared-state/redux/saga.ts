import { all, fork } from 'redux-saga/effects';
import { watchGetItemList } from './sagas';

export default function* rootSaga() {
  yield all([
    fork(watchGetItemList),
  ]);
}