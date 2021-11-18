import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_UPDATE_ACCOUNT,
  DO_UPDATE_ACCOUNT_SUCCESS,
  DO_UPDATE_ACCOUNT_FAIL,
} from '../actions';
import AsyncStorage from '@react-native-community/async-storage';
import {FireBaseService, UserService} from '@core';

function* doUpdateAccount(action: object) {
  try {
    const {user_id, username, media}: {user_id?: any; username?: any, media?: any} = action;
    var temp: any;

    yield AsyncStorage.getItem('user_data').then((val: any) => {
      temp = JSON.parse(val);
    });

    if(username) {
      yield UserService.update(user_id, username).then(val => {
        temp.username = val.user.username;      
      })
    }
    
    if(media) {
      let avatar = media.assets[0].uri;
      yield FireBaseService.putFileStorage(`user/${user_id}.jpg`, avatar);
      yield FireBaseService.getFileStorage(`user/${user_id}.jpg`).then(val => {
        temp.avatar = val;
      });
    }

    yield put({type: DO_UPDATE_ACCOUNT_SUCCESS, username: temp.username, avatar: temp.avatar});
    
    yield AsyncStorage.setItem('user_data', JSON.stringify(temp));
  } catch (error) {
    yield put({type: DO_UPDATE_ACCOUNT_FAIL, error: error});
  }
}

export function* watchDoUpdateAccount() {
  yield takeLatest(DO_UPDATE_ACCOUNT, doUpdateAccount);
}
