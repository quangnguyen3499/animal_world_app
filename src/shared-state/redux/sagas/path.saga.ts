import {put, takeLatest} from 'redux-saga/effects';
import {DO_GET_PATH, DO_GET_PATH_SUCCESS, DO_GET_PATH_FAIL} from '../actions';
import {Alert} from 'react-native';
import axios from '../../../core/api/Api';

function* doGetPath(action: object) {
  try {
    const {
      place_id,
      floor_id,
      source,
      target,
    }: {
      place_id?: string;
      floor_id?: string;
      source?: string;
      target?: string;
    } = action;
    var data: any;

    yield axios
      .get('http://192.168.1.20:3000/api/v1/shortest_path', {
        params: {
          place_id: place_id,
          floor_id: floor_id,
          source: source,
          target: target,
        },
      })
      .then((res: {data: any}) => {
        data = res.data;
      });
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
