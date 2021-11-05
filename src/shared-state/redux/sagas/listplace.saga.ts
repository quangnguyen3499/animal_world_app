import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_GET_LIST_PLACE,
  DO_GET_LIST_PLACE_SUCCESS,
  DO_GET_LIST_PLACE_FAIL,
} from '../actions';
import axios from '../../../core/api/Api';

function* doGetListPlace() {
  try {
    var data: any;

    yield axios
      .get('http://192.168.1.20:3000/api/v1/places')
      .then((res: {data: {data: any}}) => {
        data = res.data.data;
      });
    yield put({type: DO_GET_LIST_PLACE_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_LIST_PLACE_FAIL, error: error});
  }
}

export function* watchDoGetListPlace() {
  yield takeLatest(DO_GET_LIST_PLACE, doGetListPlace);
}
