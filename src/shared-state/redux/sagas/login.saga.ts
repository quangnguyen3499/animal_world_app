import {put, takeLatest} from 'redux-saga/effects';
import {DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAIL} from '../actions';
import {FireBaseService, UserService} from '@core';
import AsyncStorage from '@react-native-community/async-storage';

function* doLogin(action: object) {
  try {
    const {email, password}: {email?: any; password?: any} = action;
    var data: any;
    var avatar: any;

    yield UserService.login(email, password).then(val => {
      data = val.data;      
    });
    yield FireBaseService.getFileStorage(`user/${data.user.id}.jpg`).then(val => {
      avatar = val;
    });

    data = Object.assign(data, {avatar: avatar});

    yield AsyncStorage.setItem('user_data', JSON.stringify({
      id: data.user.id,
      username: data.user.username,
      token: data.token.token,
      avatar: data.avatar,
      email: data.user.email
    }))

    yield put({type: DO_LOGIN_SUCCESS, data});
  } catch (error) {        
    yield put({type: DO_LOGIN_FAIL, error: error});
  }
}

export function* watchDoLogin() {
  yield takeLatest(DO_LOGIN, doLogin);
}
