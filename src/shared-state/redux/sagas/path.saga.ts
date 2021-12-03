import {put, takeLatest} from 'redux-saga/effects';
import {DO_GET_PATH, DO_GET_PATH_SUCCESS, DO_GET_PATH_FAIL} from '../actions';
import {MapService} from '@core';

function* doGetPath(action: object) {
  try {
    const {
      place_id,
      floor_id,
      source,
      target,
    }: {
      place_id?: string;
      floor_id?: any;
      source?: string;
      target?: string;
    } = action;
    var data: any;

    yield MapService.getShortestPath(place_id, floor_id, source, target).then(val => data = val.data);

    yield put({type: DO_GET_PATH_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_PATH_FAIL, error: error});
  }
}

export function* watchDoGetPath() {
  yield takeLatest(DO_GET_PATH, doGetPath);
}
