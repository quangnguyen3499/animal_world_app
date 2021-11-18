import {put, takeLatest} from 'redux-saga/effects';
import {DO_GET_PATH, DO_GET_PATH_SUCCESS, DO_GET_PATH_FAIL} from '../actions';
import {Alert} from 'react-native';
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

    data = MapService.getShortestPath(place_id, floor_id, source, target);

    Alert.alert('Thông báo', 'Get path thành công');
    yield put({type: DO_GET_PATH_SUCCESS, data});
  } catch (error) {
    Alert.alert('Thông báo', 'Get path không thành công');
    yield put({type: DO_GET_PATH_FAIL, error: error});
  }
}

export function* watchDoGetPath() {
  yield takeLatest(DO_GET_PATH, doGetPath);
}
