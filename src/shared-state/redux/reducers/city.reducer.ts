import {
  DO_GET_CITY,
  DO_GET_CITY_SUCCESS,
  DO_GET_CITY_FAIL,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  city: {},
};

export const cityReducer = (state = INITIAL_STATE, action: any) => {  
  switch (action.type) {
    case DO_GET_CITY:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DO_GET_CITY_SUCCESS:                           
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data,
      });
    case DO_GET_CITY_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      break;
  }
  return state;
};
