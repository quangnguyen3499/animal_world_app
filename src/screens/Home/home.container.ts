import { connect } from 'react-redux';
import { HomeComponent } from './home.view';
import {doLogout} from '@shared-state'
import AsyncStorage from '@react-native-community/async-storage';

export const HomeContainer = connect(
  (state: any) => {
    return {
      isLogout: state.logout.isLogout,
    }
  },
  (dispatch: any) => {
    return {
      doLogout: () => {
        dispatch(doLogout())
      }
    }
  }
)(HomeComponent);
