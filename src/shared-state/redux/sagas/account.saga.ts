import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_UPDATE_ACCOUNT,
  DO_UPDATE_ACCOUNT_SUCCESS,
  DO_UPDATE_ACCOUNT_FAIL,
} from '../actions';
import axios from '../../../core/api/Api';
import AsyncStorage from '@react-native-community/async-storage';

function* doUpdateAccount(action: object) {
  try {
    const {user_id, username}: {user_id?: any; username?: any} = action;
    var user_data: any;
    var user_name: any;

    yield axios
      .put(`http://192.168.1.20:3000/api/v1/users/${user_id}`, {
        username: username,
      })
      .then((res: {data: {data: {user: any; token: any}}}) => {
        user_data = res.data.data.user;
        user_name = user_data.first_name + user_data.last_name;
      });
    yield put({type: DO_UPDATE_ACCOUNT_SUCCESS, user_data});
    yield AsyncStorage.setItem('username', JSON.stringify(user_name));
  } catch (error) {
    yield put({type: DO_UPDATE_ACCOUNT_FAIL, error: error});
  }
}

export function* watchDoUpdateAccount() {
  yield takeLatest(DO_UPDATE_ACCOUNT, doUpdateAccount);
}
