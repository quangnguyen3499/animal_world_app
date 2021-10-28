import { all, fork } from 'redux-saga/effects';
import { 
  watchDoLogin, 
  watchDoRegister, 
  watchDoLogout, 
  watchDoGetMarkers,
  watchDoGetPath,
  watchDoGetPlaceDetail,
  watchDoGetListPlace,
} from './sagas';

export default function* rootSaga() {
  yield all([
    fork(watchDoLogin),
    fork(watchDoRegister),
    fork(watchDoLogout),
    fork(watchDoGetMarkers),
    fork(watchDoGetPath),
    fork(watchDoGetPlaceDetail),
    fork(watchDoGetListPlace),
  ]);
}