import { connect } from 'react-redux';
import { RegisterComponent } from './register.view';
import { doRegister } from '@shared-state'

export const RegisterContainer = connect(
  (state: any) => {
    return {}
  },
  (dispatch: any) => {
    return {
      doRegister: (email: string, password: string, username: string) => {
        dispatch(doRegister(email, password, username))
      }
    }
  }
)(RegisterComponent);
