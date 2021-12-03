import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_GET_CITY,
  DO_GET_CITY_SUCCESS,
  DO_GET_CITY_FAIL,
} from '../actions';
import {FireBaseService, PlaceService} from '@core';

function* doGetCity() {
  try {
    var data: Array<Object>;
    var temp: any;
    data = [];

    yield PlaceService.getCity().then(val => temp = val);
    yield* temp.map(async (e: any) => {
      data.push(Object.assign({
        thumbnail_url: await FireBaseService.getFileStorage(`/city/${e.id}.jpg`)}, e)
      );
    })
    
    yield put({type: DO_GET_CITY_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_CITY_FAIL, error: error});
  }
}

export function* watchDoGetCity() {
  yield takeLatest(DO_GET_CITY, doGetCity);
}
