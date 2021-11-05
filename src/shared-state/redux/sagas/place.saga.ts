import {put, takeLatest} from 'redux-saga/effects';
import {
  DO_GET_PLACE,
  DO_GET_PLACE_SUCCESS,
  DO_GET_PLACE_FAIL,
} from '../actions';
import axios from '../../../core/api/Api';
import storage from '@react-native-firebase/storage';
// import {utils} from '@react-native-firebase/app';
// TODO:
// link to firebase storage: https://console.firebase.google.com/u/1/project/indoormap-a28c2/storage/indoormap-a28c2.appspot.com/files

function* doGetPlaceDetail(action: object) {
  try {
    const {place_id}: {place_id?: string} = action;
    var data: any;

    const images = storage().ref('/coopmart/images');
    console.log(images);

    yield axios
      .get(`http://192.168.1.20:3000/api/v1/places/${place_id}`)
      .then((res: {data: {data: any}}) => {
        data = res.data.data;
        // data.concat({images: images})
      });
    yield put({type: DO_GET_PLACE_SUCCESS, data});
  } catch (error) {
    yield put({type: DO_GET_PLACE_FAIL, error: error});
  }
}

export function* watchDoGetPlaceDetail() {
  yield takeLatest(DO_GET_PLACE, doGetPlaceDetail);
}
