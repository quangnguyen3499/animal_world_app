import {put, takeLatest} from 'redux-saga/effects';
import {DO_LOGOUT, DO_LOGOUT_SUCCESS, DO_LOGOUT_FAIL} from '../actions';
import {Alert} from 'react-native';
import {UserService} from '@core';
import AsyncStorage from '@react-native-community/async-storage';

function* doLogout() {
  try {
    var token: string;

    AsyncStorage.getItem('user_data').then((val: any) => {
      token = val.user_token;
      UserService.logout(token);
    });
    
    Alert.alert('Thông báo', 'Đăng xuất thành công');
    yield put({type: DO_LOGOUT_SUCCESS});
    yield AsyncStorage.removeItem('user_data');
  } catch (error) {
    Alert.alert('Thông báo', 'Đăng xuất không thành công');
    yield put({type: DO_LOGOUT_FAIL, error: error});
  }
}

export function* watchDoLogout() {
  yield takeLatest(DO_LOGOUT, doLogout);
}
