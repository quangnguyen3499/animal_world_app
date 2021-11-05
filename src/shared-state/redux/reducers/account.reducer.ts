import {
  DO_UPDATE_ACCOUNT,
  DO_UPDATE_ACCOUNT_SUCCESS,
  DO_UPDATE_ACCOUNT_FAIL,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  username: '',
};

export const accountReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case DO_UPDATE_ACCOUNT:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DO_UPDATE_ACCOUNT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        username: action.username,
      });
    case DO_UPDATE_ACCOUNT_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      break;
  }
  return state;
};
