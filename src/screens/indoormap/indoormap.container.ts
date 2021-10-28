import { connect } from 'react-redux';
import { IndoorMapComponent } from './indoormap.view';
import { doGetMarker, doGetPath, doGetPlaceDetail } from '@shared-state';

export const IndoorMapContainer = connect(
  (state: any) => {    
    return {
      markers: state.markers.markers,
      path: state.direction,
      distance: state.path.distance,
      placeDetail: state.placeDetail.placeDetail,        
    }
  },
  (dispatch: any) => {
    return {
      doGetMarker: (place_id: string, floor_id: string) => {
        dispatch(doGetMarker(place_id, floor_id))
      },
      doGetPath: (place_id: string, floor_id: string, source: string, target: string) => {
        dispatch(doGetPath(place_id, floor_id, source, target))
      },
      doGetPlaceDetail: (place_id: string) => {
        dispatch(doGetPlaceDetail(place_id))
      },
    }
  }
)(IndoorMapComponent);
