import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_UPDATE_ACCOUNT,
  DO_UPDATE_ACCOUNT_SUCCESS,
  DO_UPDATE_ACCOUNT_FAIL,
} from '../actions';
import AsyncStorage from '@react-native-community/async-storage';
import {UserService} from '@core';

function* doUpdateAccount(action: object) {
  try {
    const {user_id, username}: {user_id?: any; username?: any} = action;
    var new_username: any;
    var temp: any;

    yield UserService.update(user_id, username).then(val => {      
      new_username = val.user.username;      
    })

    yield put({type: DO_UPDATE_ACCOUNT_SUCCESS, username: new_username});
    yield AsyncStorage.getItem('user_data').then((val: any) => {
      temp = JSON.parse(val);
      temp.username = new_username;
    })
    yield AsyncStorage.setItem('user_data', JSON.stringify(temp));   
  } catch (error) {
    yield put({type: DO_UPDATE_ACCOUNT_FAIL, error: error});
  }
}

export function* watchDoUpdateAccount() {
  yield takeLatest(DO_UPDATE_ACCOUNT, doUpdateAccount);
}
