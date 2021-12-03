import { doLogout, doUpdateAccount } from '@shared-state';
import {connect} from 'react-redux';
import AccountComponent from './account.view';

export const AccountContainer = connect(
  (state: any) => {         
    return {
      isLoading: state.account.isLoading,
      avatarNew: state.account.avatar,
    };
  },
  (dispatch: any) => {
    return {
      doUpdateAccount: (user_id: string, username: string, media: string) => {        
        dispatch(doUpdateAccount(user_id, username, media));
      },
      doLogout: () => {
        dispatch(doLogout());
      },
    };
  },
)(AccountComponent);
