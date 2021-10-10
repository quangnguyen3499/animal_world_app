import { call, put, takeLatest } from 'redux-saga/effects';
import { DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAIL, } from '../actions';
import { Alert } from 'react-native';
import axios from '../../../core/api/Api';
import { onSignIn } from '@core';
import AsyncStorage from '@react-native-community/async-storage';

function* doLogin(action: object) {
  try {    
    const { email, password }: { email?: any, password?: any } = action;
    var user_data: any;
    var user_token: any;

    yield axios.post(
      'http://192.168.1.169:3000/api/v1/users/sign_in', 
      {
        email: email,
        password: password
      })
    .then((res) => {      
      user_data = res.data.data.user
      user_token = res.data.data.token
    });    
    Alert.alert(
      "Thông báo",
      "Đăng nhập thành công"
    );    
    yield put({ type: DO_LOGIN_SUCCESS, user_data });
    yield call(onSignIn);    
    yield AsyncStorage.setItem('tokenAuth', JSON.stringify(user_token));
  }
  catch (error) {
    Alert.alert(
      "Thông báo",
      "Đăng nhập không thành công"
    );
    yield put({ type: DO_LOGIN_FAIL, error: error });
  }
}

export function* watchDoLogin() {
  yield takeLatest(DO_LOGIN, doLogin);
}