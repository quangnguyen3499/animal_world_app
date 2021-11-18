import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_GET_SHOP,
  DO_GET_SHOP_SUCCESS,
  DO_GET_SHOP_FAIL,
} from '../actions';
import {FireBaseService, MapService} from '@core';

function* doGetListShop(action: object) {
  try {
    const {place_id, floor_id}: {place_id?: string; floor_id?: any} = action;
    var data: Array<Object>;
    var temp: any;
    data = [];
    
    yield MapService.getShops(place_id, floor_id).then(val => temp = val.data);

    yield* temp.map(async (e: any) => {
      data.push(Object.assign({
        logo_url: await FireBaseService.getFileStorage(`logo/${e.id}.jpg`)}, e)
      );      
    })    
    yield put({type: DO_GET_SHOP_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_SHOP_FAIL, error: error});
  }
}

export function* watchDoGetListShop() {
  yield takeLatest(DO_GET_SHOP, doGetListShop);
}
