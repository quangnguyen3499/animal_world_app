import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_GET_SHOP,
  DO_GET_SHOP_SUCCESS,
  DO_GET_SHOP_FAIL,
} from '../actions';
import {MapService} from '@core';

function* doGetListShop(action: object) {
  try {
    const {place_id, floor_id}: {place_id?: string; floor_id?: any} = action;
    var data: Array<Object>;
    data = [];
    
    yield MapService.getShops(place_id, floor_id).then(val => data = val.data);

    yield put({type: DO_GET_SHOP_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_SHOP_FAIL, error: error});
  }
}

export function* watchDoGetListShop() {
  yield takeLatest(DO_GET_SHOP, doGetListShop);
}
