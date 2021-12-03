import {connect} from 'react-redux';
import {HomeComponent} from './home.view';
import {doGetListPlace, doGetCity} from '@shared-state';

export const HomeContainer = connect(
  (state: any) => {            
    return {
      listplace: state.listplace.listplace,
      isLogout: state.logout.isLogout,
      username: state.account.username,
      avatarNew: state.account.avatar,
      city: state.city.data
    };
  },
  (dispatch: any) => {
    return {
      doGetCity: () => {
        dispatch(doGetCity());
      },
      doGetListPlace: () => {
        dispatch(doGetListPlace());
      },
    };
  },
)(HomeComponent);
