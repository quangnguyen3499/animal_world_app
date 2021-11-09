import {PlaceService, FireBaseService} from '@core';
import {call, put, take, takeLatest} from 'redux-saga/effects';
import {
  DO_GET_LIST_PLACE,
  DO_GET_LIST_PLACE_SUCCESS,
  DO_GET_LIST_PLACE_FAIL,
} from '../actions';

function* doGetListPlace() {
  try {
    var data: any;

    yield FireBaseService.getFolderStorage('/thumbnail').then(async val => {
      data = {
        listplace: await PlaceService.getPlaces(),
        thumbnail_url: val
      }
    });
    
    yield put({type: DO_GET_LIST_PLACE_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_LIST_PLACE_FAIL, error: error});
  }
}

export function* watchDoGetListPlace() {
  yield takeLatest(DO_GET_LIST_PLACE, doGetListPlace);
}
