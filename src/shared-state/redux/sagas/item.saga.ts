import { put, takeLatest } from 'redux-saga/effects';
import { GET_ITEM_LIST, GET_ITEM_LIST_FAIL, GET_ITEM_LIST_SUCCESS } from '../actions';
import { Item } from '@core';
// import { axiosInstance } from '../../../core/api';
import axios from 'axios';

function* getItemList() {
  try {
    let rs: Array<Item> = [];

    rs = yield axios.get('http://192.168.1.169:3000/api/v1/items')
    yield put({ type: GET_ITEM_LIST_SUCCESS, data: rs });
  }
  catch (error) {
    yield put({ type: GET_ITEM_LIST_FAIL, error: error });
  }
}

export function* watchGetItemList() {
  yield takeLatest(GET_ITEM_LIST, getItemList);
}