import {connect} from 'react-redux';
import {IndoorMapComponent} from './indoormap.view';
import {doGetListShop, doGetPath} from '@shared-state';

export const IndoorMapContainer = connect(
  (state: any) => {                                    
    return {
      shops: state.shops.shops,
      path: state.path.direction,
      distance: state.path.distance,
      placeDetail: state.placeDetail.placeDetail,
    };
  },
  (dispatch: any) => {
    return {
      doGetListShop: (place_id: string, floor_id: any) => {
        dispatch(doGetListShop(place_id, floor_id));
      },
      doGetPath: (
        place_id: string,
        floor_id: any,
        source: string,
        target: string,
      ) => {
        dispatch(doGetPath(place_id, floor_id, source, target));
      },
    };
  },
)(IndoorMapComponent);
