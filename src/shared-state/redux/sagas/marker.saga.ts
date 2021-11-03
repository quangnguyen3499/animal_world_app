import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_GET_MARKER,
  DO_GET_MARKER_SUCCESS,
  DO_GET_MARKER_FAIL,
} from '../actions';
import axios from '../../../core/api/Api';

function* doGetMarkers(action: object) {
  try {
    const {place_id, floor_id}: {place_id?: string; floor_id?: string} = action;
    var data: any;

    yield axios
      .get('http://192.168.1.20:3000/api/v1/coordinates', {
        params: {
          place_id: place_id,
          floor_id: floor_id,
        },
      })
      .then(res => {
        data = res.data;
      });
    yield put({type: DO_GET_MARKER_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_MARKER_FAIL, error: error});
  }
}

export function* watchDoGetMarkers() {
  yield takeLatest(DO_GET_MARKER, doGetMarkers);
}
