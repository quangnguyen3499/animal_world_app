import {put, takeLatest} from 'redux-saga/effects';
import {DO_REGISTER, DO_REGISTER_SUCCESS, DO_REGISTER_FAIL} from '../actions';
import {Alert} from 'react-native';
import {UserService} from '@core';

function* doRegister(action: object) {
  try {
    const {
      email,
      password,
      username,
    }: {email?: any; password?: any; username?: any} = action;
    var user_data: any;

    user_data = UserService.create(email, password, username);

    Alert.alert('Thông báo', 'Đăng ký thành công');
    yield put({type: DO_REGISTER_SUCCESS, user_data});
  } catch (error) {
    Alert.alert('Thông báo', 'Đăng ký không thành công');
    yield put({type: DO_REGISTER_FAIL, error: error});
  }
}

export function* watchDoRegister() {
  yield takeLatest(DO_REGISTER, doRegister);
}
