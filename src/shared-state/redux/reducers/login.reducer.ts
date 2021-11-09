import {DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAIL} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  isLogged: false,
};

export const loginReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case DO_LOGIN:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DO_LOGIN_SUCCESS:      
      return Object.assign({}, state, {
        isLoading: false,
        isLogged: true,
      });
    case DO_LOGIN_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      break;
  }
  return state;
};
