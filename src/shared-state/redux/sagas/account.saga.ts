import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_UPDATE_ACCOUNT,
  DO_UPDATE_ACCOUNT_SUCCESS,
  DO_UPDATE_ACCOUNT_FAIL,
} from '../actions';
import AsyncStorage from '@react-native-community/async-storage';
import {UserService} from '@core';

function* doUpdateAccount(action: object) {
  try {
    const {user_id, username}: {user_id?: any; username?: any} = action;
    var user_data: any;
    var user_name: any;
    var data: any;

    data = UserService.update(user_id, username);
    user_data = data.user;
    user_name = user_data.first_name + user_data.last_name;

    yield put({type: DO_UPDATE_ACCOUNT_SUCCESS, user_data});
    // TODO:
    yield AsyncStorage.setItem('user_data', JSON.stringify(user_name));
  } catch (error) {
    yield put({type: DO_UPDATE_ACCOUNT_FAIL, error: error});
  }
}

export function* watchDoUpdateAccount() {
  yield takeLatest(DO_UPDATE_ACCOUNT, doUpdateAccount);
}
