import { connect } from 'react-redux';
import { HomeComponent } from './home.view';
import {doLogout} from '@shared-state'

export const HomeContainer = connect(
  (state: any) => {
    return {}
  },
  (dispatch: any) => {
    return {
      doLogout: () => {
        dispatch(doLogout())
      }
    }
  }
)(HomeComponent);
