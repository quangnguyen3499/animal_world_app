import {
  DO_CHANGE_AVATAR,
  DO_CHANGE_AVATAR_SUCCESS,
  DO_CHANGE_AVATAR_FAIL,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  avatar: '',
};

export const avatarReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case DO_CHANGE_AVATAR:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DO_CHANGE_AVATAR_SUCCESS:      
      return Object.assign({}, state, {
        isLoading: false,
        avatar: action.avatar,
      });
    case DO_CHANGE_AVATAR_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      break;
  }
  return state;
};
