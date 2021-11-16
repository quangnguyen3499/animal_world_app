import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_CHANGE_AVATAR,
  DO_CHANGE_AVATAR_SUCCESS,
  DO_CHANGE_AVATAR_FAIL,
} from '../actions';
import {FireBaseService} from '@core';
import AsyncStorage from '@react-native-community/async-storage';

function* doChangeAvatar(action: object) {
  try {    
    const {user_id, media}: {user_id?: any; media?: any} = action;
    let temp: any;
    const avatar = media.assets[0].uri;

    yield FireBaseService.putFileStorage(`user/${user_id}.jpg`, avatar);
    yield AsyncStorage.getItem('user_data').then((val: any) => {
      temp = JSON.parse(val);
      temp.avatar = avatar;
    })
    yield AsyncStorage.setItem('user_data', JSON.stringify(temp));   
  
    yield put({type: DO_CHANGE_AVATAR_SUCCESS, avatar: avatar});
  } catch (error) {
    yield put({type: DO_CHANGE_AVATAR_FAIL, error: error});
  }
}

export function* watchDoChangeAvatar() {
  yield takeLatest(DO_CHANGE_AVATAR, doChangeAvatar);
}
