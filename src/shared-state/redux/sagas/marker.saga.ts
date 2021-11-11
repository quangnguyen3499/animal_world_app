import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_GET_MARKER,
  DO_GET_MARKER_SUCCESS,
  DO_GET_MARKER_FAIL,
} from '../actions';
import {FireBaseService, MapService} from '@core';

function* doGetMarkers(action: object) {
  try {
    const {place_id, floor_id}: {place_id?: string; floor_id?: string} = action;
    var data: any;

    const logos = FireBaseService.getFolderStorage('/logo');

    yield MapService.getMarkers(place_id, floor_id).then(val => {
      data = Object.assign(val, logos);
    });
    yield put({type: DO_GET_MARKER_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_MARKER_FAIL, error: error});
  }
}

export function* watchDoGetMarkers() {
  yield takeLatest(DO_GET_MARKER, doGetMarkers);
}
