import {put, takeLatest} from 'redux-saga/effects';
import {DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAIL} from '../actions';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {FireBaseService, UserService} from '@core';

function* doLogin(action: object) {
  try {
    const {email, password}: {email?: any; password?: any} = action;
    var user_token: any;
    var username: any;
    var data: any;
    var avatar: string;

    UserService.login(email, password).then(async val => {
      data = val.data.user;      
      username = data.first_name + data.last_name;
      user_token = val.data.token;

      Alert.alert('Thông báo', 'Đăng nhập thành công');
      put({type: DO_LOGIN_SUCCESS});

      avatar = await FireBaseService.getFileStorage(`user/${data.id}.jpeg`);

      AsyncStorage.setItem('user_data', JSON.stringify({
        id: data.id,
        username: username,
        user_token: user_token,
        avatar: avatar
      }));
    })
  } catch (error) {
    Alert.alert('Thông báo', 'Đăng nhập không thành công');
    yield put({type: DO_LOGIN_FAIL, error: error});
  }
}

export function* watchDoLogin() {
  yield takeLatest(DO_LOGIN, doLogin);
}
