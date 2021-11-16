import { doUpdateAccount, doChangeAvatar } from '@shared-state';
import {connect} from 'react-redux';
import AccountComponent from './account.view';

export const AccountContainer = connect(
  (state: any) => {        
    return {
      isLoading: state.avatar.isLoading,
      avatarNew: state.avatar.avatar,
    };
  },
  (dispatch: any) => {
    return {
      doUpdateAccount: (user_id: string, username: string) => {        
        dispatch(doUpdateAccount(user_id, username));
      },
      doChangeAvatar: (user_id: string, media: string) => {
        dispatch(doChangeAvatar(user_id, media));
      }
    };
  },
)(AccountComponent);
