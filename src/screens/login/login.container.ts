import { connect } from 'react-redux';
import { LoginComponent } from './login.view';
import {doLogin} from '@shared-state'

export const LoginContainer = connect(
  (state: any) => {    
    return {
      isLoading: state.user.isLoading,
      isLogged: state.user.isLogged,
    }
  },
  (dispatch: any) => {
    return {
      doLogin: (email: string, password: string) => {
        dispatch(doLogin(email, password))
      }
    }
  }
)(LoginComponent);
