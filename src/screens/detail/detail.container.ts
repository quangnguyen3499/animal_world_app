import {connect} from 'react-redux';
import DetailComponent from './detail.view';
import {doGetPlaceDetail} from '@shared-state';

export const DetailContainer = connect(
  (state: any) => {
    return {
      placeDetail: state.placeDetail.placeDetail,
      imagesPlace: state.placeDetail.images,
    };
  },
  (dispatch: any) => {
    return {
      doGetPlaceDetail: (place_id: string) => {
        dispatch(doGetPlaceDetail(place_id));
      },
    };
  },
)(DetailComponent);
