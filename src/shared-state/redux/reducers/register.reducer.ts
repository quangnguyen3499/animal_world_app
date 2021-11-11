import {DO_REGISTER, DO_REGISTER_SUCCESS, DO_REGISTER_FAIL} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  username: '',
  isLogout: false,
};

export const registerReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case DO_REGISTER:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DO_REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLogged: true,
        username: action.username,
      });
    case DO_REGISTER_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      break;
  }
  return state;
};
