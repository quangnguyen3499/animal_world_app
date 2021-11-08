import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_GET_PLACE,
  DO_GET_PLACE_SUCCESS,
  DO_GET_PLACE_FAIL,
} from '../actions';
import { PlaceService, FireBaseService } from '@core';

function* doGetPlaceDetail(action: object) {
  try {
    const {place_id}: {place_id?: string} = action;
    var data: any;

    const images = FireBaseService.getStorage(`/place/${place_id}/images`);
    const floormap = FireBaseService.getStorage(`place/${place_id}/floormap`);

    data = {
      ...PlaceService.getPlaceDetail(place_id),
      ...{images: images},
      ...{floormap: floormap}
    };

    yield put({type: DO_GET_PLACE_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_PLACE_FAIL, error: error});
  }
}

export function* watchDoGetPlaceDetail() {
  yield takeLatest(DO_GET_PLACE, doGetPlaceDetail);
}
