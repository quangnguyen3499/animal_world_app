import {UserState} from '@core';
import {DO_LOGOUT, DO_LOGOUT_SUCCESS, DO_LOGOUT_FAIL} from '../actions';

const INITIAL_STATE: UserState = {
  isLoading: false,
  isLogout: false,
  username: '',
};

export const logoutReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case DO_LOGOUT:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DO_LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLogout: true,
        username: action.username,
      });
    case DO_LOGOUT_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      break;
  }
  return state;
};
