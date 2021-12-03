import {all, fork} from 'redux-saga/effects';
import {
  watchDoLogin,
  watchDoRegister,
  watchDoLogout,
  watchDoGetListShop,
  watchDoGetPath,
  watchDoGetPlaceDetail,
  watchDoGetListPlace,
  watchDoUpdateAccount,
  watchDoGetCity,
} from './sagas';

export default function* rootSaga() {
  yield all([
    fork(watchDoLogin),
    fork(watchDoRegister),
    fork(watchDoLogout),
    fork(watchDoGetListShop),
    fork(watchDoGetPath),
    fork(watchDoGetPlaceDetail),
    fork(watchDoGetListPlace),
    fork(watchDoUpdateAccount),
    fork(watchDoGetCity),
  ]);
}
