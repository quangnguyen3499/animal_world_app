import {connect} from 'react-redux';
import {ListPlaceComponent} from './listplace.view';
import {doGetListPlace} from '@shared-state';

export const ListPlaceContainer = connect(
  (state: any) => {        
    return {
      listplace: state.listPlace.listPlace,
    };
  },
  (dispatch: any) => {
    return {
      doGetListPlace: () => {
        dispatch(doGetListPlace());
      },
    };
  },
)(ListPlaceComponent);