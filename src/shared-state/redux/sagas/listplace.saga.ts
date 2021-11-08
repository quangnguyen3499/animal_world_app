import {PlaceService} from '@core';
import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_GET_LIST_PLACE,
  DO_GET_LIST_PLACE_SUCCESS,
  DO_GET_LIST_PLACE_FAIL,
} from '../actions';

function* doGetListPlace() {
  try {
    var data: any;

    data = PlaceService.getPlaces();
    
    yield put({type: DO_GET_LIST_PLACE_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_LIST_PLACE_FAIL, error: error});
  }
}

export function* watchDoGetListPlace() {
  yield takeLatest(DO_GET_LIST_PLACE, doGetListPlace);
}