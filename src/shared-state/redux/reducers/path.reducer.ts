import {DO_GET_PATH, DO_GET_PATH_SUCCESS, DO_GET_PATH_FAIL} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  path: "",
  distance: 0
};

export const pathReducer = (state = INITIAL_STATE, action: any) => {  
  switch(action.type) {
    case DO_GET_PATH: 
    return Object.assign(
      {},
      state,
      {
        isLoading: true
      }
    );
    case DO_GET_PATH_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          path: action.path,
          distance: action.distance
        }
      );
    case DO_GET_PATH_FAIL:
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          error: action.error
        }
      );
      default:
        break;
  };
  return state;
}