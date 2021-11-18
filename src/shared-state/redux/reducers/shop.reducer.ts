import {
  DO_GET_SHOP,
  DO_GET_SHOP_SUCCESS,
  DO_GET_SHOP_FAIL,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  shops: [],
};

export const shopReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case DO_GET_SHOP:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DO_GET_SHOP_SUCCESS:      
      return Object.assign({}, state, {
        isLoading: false,
        shops: action.data,
      });
    case DO_GET_SHOP_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      break;
  }
  return state;
};
