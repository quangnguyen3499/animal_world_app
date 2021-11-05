import {connect} from 'react-redux';
import AccountComponent from './account.view';

export const AccountContainer = connect(
  (state: any) => {
    return {
      isLoading: state.username.isLoading,
    };
  },
  () => {
    return {};
  },
)(AccountComponent);
