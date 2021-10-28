import { put, takeLatest } from 'redux-saga/effects';
import { DO_GET_PLACE, DO_GET_PLACE_SUCCESS, DO_GET_PLACE_FAIL } from '../actions';
import axios from '../../../core/api/Api';

function* doGetPlaceDetail(action: object) {
  try {
    const { place_id }: { place_id?: string } = action;
    var data: any;

    yield axios.get(`http://192.168.56.1:3000/api/v1/places/${place_id}`)
    .then((res) => {      
      data = res.data.data
    });
    yield put({ type: DO_GET_PLACE_SUCCESS, data });
  }
  catch (error) {
    yield put({ type: DO_GET_PLACE_FAIL, error: error });
  }
}

export function* watchDoGetPlaceDetail() {
  yield takeLatest(DO_GET_PLACE, doGetPlaceDetail);
}