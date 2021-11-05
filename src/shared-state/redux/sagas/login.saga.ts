import {put, takeLatest} from 'redux-saga/effects';
import {DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAIL} from '../actions';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '@react-native-firebase/storage';
import {UserService} from '@core';

function* doLogin(action: object) {
  try {
    const {email, password}: {email?: any; password?: any} = action;
    var user_data: any;
    var user_token: any;
    var user_name: any;
    var data: any;

    data = UserService.login(email, password);
    
    user_data = data.data.data.user;
    user_name = user_data.first_name + user_data.last_name;
    user_token = data.data.data.token;

    Alert.alert('Thông báo', 'Đăng nhập thành công');
    yield put({type: DO_LOGIN_SUCCESS, user_data});

    // const avatar = storage().ref(`/user/${user_data.id}.jpeg`).getDownloadURL();

    yield AsyncStorage.setItem('user_id', JSON.stringify(user_data.id));
    yield AsyncStorage.setItem('username', JSON.stringify(user_name));
    yield AsyncStorage.setItem('tokenAuth', JSON.stringify(user_token));
    // yield AsyncStorage.setItem('avatar', JSON.stringify(avatar));
  } catch (error) {
    Alert.alert('Thông báo', 'Đăng nhập không thành công');
    yield put({type: DO_LOGIN_FAIL, error: error});
  }
}

export function* watchDoLogin() {
  yield takeLatest(DO_LOGIN, doLogin);
}
