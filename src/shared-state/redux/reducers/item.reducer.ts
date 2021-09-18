// import { ItemState } from '@core';
import { ItemState } from '@core';
import { GET_ITEM_LIST, GET_ITEM_LIST_FAIL, GET_ITEM_LIST_SUCCESS } from '../actions';

const INITIAL_STATE: ItemState = {
  isLoading: false,
  data: [],
  error: {},
};

// reducer
export const itemReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_ITEM_LIST:
      return Object.assign(
        {},
        state,
        {
          isLoading: true
        }
      );
    case GET_ITEM_LIST_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          data: action.data
        }
      );
    case GET_ITEM_LIST_FAIL:
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
  }
  return state;
};
