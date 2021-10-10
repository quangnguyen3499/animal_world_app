import { connect } from 'react-redux';
import { IndoorMapComponent } from './indoormap.view';
import { doGetMarker, doGetPath } from '@shared-state';

export const IndoorMapContainer = connect(
  (state: any) => {
    return {
      markers: state.markers.markers           
    }
  },
  (dispatch: any) => {
    return {
      doGetMarker: (place_id: string, floor_id: string) => {
        dispatch(doGetMarker(place_id, floor_id))
      },
      doGetPath: (place_id: string, floor_id: string, source: string, target: string) => {
        dispatch(doGetPath(place_id, floor_id, source, target))
      }
    }
  }
)(IndoorMapComponent);
