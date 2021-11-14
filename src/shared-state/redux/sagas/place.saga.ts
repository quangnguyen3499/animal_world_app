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
    let detail: any;
    let images: any;
    let floormap: any;

    yield FireBaseService.getFolderStorage(`/place/${place_id}/floormap`).then(val => {
      floormap = val;
    })

    yield FireBaseService.getFolderStorage(`/place/${place_id}/images`).then(val => {
      images = val;
    });

    yield PlaceService.getPlaceDetail(place_id).then(val => {
      detail = val;
    })

    data = Object.assign({detail: detail}, {images: images}, {floormap: floormap});

    yield put({type: DO_GET_PLACE_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_PLACE_FAIL, error: error});
  }
}

export function* watchDoGetPlaceDetail() {
  yield takeLatest(DO_GET_PLACE, doGetPlaceDetail);
}
