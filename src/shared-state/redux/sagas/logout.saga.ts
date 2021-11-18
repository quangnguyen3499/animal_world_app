import {put, takeLatest} from 'redux-saga/effects';
import {DO_LOGOUT, DO_LOGOUT_SUCCESS, DO_LOGOUT_FAIL} from '../actions';
import {Alert} from 'react-native';
import {UserService} from '@core';
import AsyncStorage from '@react-native-community/async-storage';

function* doLogout() {
  try {
    let user_data: any;

    yield AsyncStorage.getItem('user_data').then((val: any) => {           
      user_data = JSON.parse(val);
      UserService.logout(user_data.email);
    });
    
    yield put({type: DO_LOGOUT_SUCCESS});
    user_data.token = null;
    yield AsyncStorage.setItem('user_data', JSON.stringify(user_data));
  } catch (error) {
    Alert.alert('Thông báo', 'Đăng xuất không thành công');
    yield put({type: DO_LOGOUT_FAIL, error: error});
  }
}

export function* watchDoLogout() {
  yield takeLatest(DO_LOGOUT, doLogout);
}
