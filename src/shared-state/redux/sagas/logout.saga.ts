import {put, takeLatest} from 'redux-saga/effects';
import {DO_LOGOUT, DO_LOGOUT_SUCCESS, DO_LOGOUT_FAIL} from '../actions';
import {Alert} from 'react-native';
import {UserService} from '@core';
import AsyncStorage from '@react-native-community/async-storage';

function* doLogout() {
  try {
    var token: string;

    AsyncStorage.getItem('tokenAuth').then(val => {
      token = JSON.parse(val)[Object.keys(JSON.parse(val))[0]];
      UserService.logout(token);
    });
    
    Alert.alert('Thông báo', 'Đăng xuất thành công');
    yield put({type: DO_LOGOUT_SUCCESS});
    yield AsyncStorage.removeItem('tokenAuth');
  } catch (error) {
    Alert.alert('Thông báo', 'Đăng xuất không thành công');
    yield put({type: DO_LOGOUT_FAIL, error: error});
  }
}

export function* watchDoLogout() {
  yield takeLatest(DO_LOGOUT, doLogout);
}
