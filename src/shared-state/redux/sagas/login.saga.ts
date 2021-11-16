import {put, takeLatest} from 'redux-saga/effects';
import {DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAIL} from '../actions';
import {Alert} from 'react-native';
import {FireBaseService, UserService} from '@core';

function* doLogin(action: object) {
  try {
    const {email, password}: {email?: any; password?: any} = action;
    var data: any;
    var avatar: any;

    yield UserService.login(email, password).then(val => {
      data = val.data;            
      Alert.alert('Thông báo', 'Đăng nhập thành công');
    });
    yield FireBaseService.getFileStorage(`user/${data.user.id}.jpg`).then(val => {
      avatar = val;      
    });

    data = Object.assign(data, {avatar: avatar});
    
    yield put({type: DO_LOGIN_SUCCESS, data});
  } catch (error) {        
    Alert.alert('Thông báo', 'Đăng nhập không thành công');
    yield put({type: DO_LOGIN_FAIL, error: error});
  }
}

export function* watchDoLogin() {
  yield takeLatest(DO_LOGIN, doLogin);
}
