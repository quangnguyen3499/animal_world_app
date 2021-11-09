import {put, takeLatest} from 'redux-saga/effects';
import {DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAIL} from '../actions';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {FireBaseService, UserService} from '@core';

function* doLogin(action: object) {
  try {
    const {email, password}: {email?: any; password?: any} = action;
    var user_data: any;
    var user_token: any;
    var username: any;
    var data: any;
    var avatar: any;

    data = UserService.login(email, password);
    
    user_data = data.data.data.user;
    username = user_data.first_name + user_data.last_name;
    user_token = data.data.data.token;

    Alert.alert('Thông báo', 'Đăng nhập thành công');
    yield put({type: DO_LOGIN_SUCCESS, user_data});

    // avatar = FireBaseService.getFileStorage(`user/${user_data.id}`);
    avatar = FireBaseService.getFileStorage('user/1.jpeg');

    yield AsyncStorage.setItem('user_data', Object.assign(
      {id: user_data.id},
      {username: username},
      {user_token: user_token},
      {avatar: avatar},
      {}
    ));
  } catch (error) {
    Alert.alert('Thông báo', 'Đăng nhập không thành công');
    yield put({type: DO_LOGIN_FAIL, error: error});
  }
}

export function* watchDoLogin() {
  yield takeLatest(DO_LOGIN, doLogin);
}
