import {PlaceService, FireBaseService} from '@core';
import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_GET_LIST_PLACE,
  DO_GET_LIST_PLACE_SUCCESS,
  DO_GET_LIST_PLACE_FAIL,
} from '../actions';

function* doGetListPlace() {
  try {
    var data: Array<Object>;
    var temp: any;
    data = [];
    
    yield PlaceService.getPlaces().then(val => temp = val);
    yield* temp.map(async (e: any) => {
      data.push(Object.assign({
        thumbnail_url: await FireBaseService.getFileStorage(`/thumbnail/${e.id}.jpg`)}, e)
      );
    })

    yield put({type: DO_GET_LIST_PLACE_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_LIST_PLACE_FAIL, error: error});
  }
}

export function* watchDoGetListPlace() {
  yield takeLatest(DO_GET_LIST_PLACE, doGetListPlace);
}
