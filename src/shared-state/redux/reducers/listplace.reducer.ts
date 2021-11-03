import {DO_GET_LIST_PLACE, DO_GET_LIST_PLACE_SUCCESS, DO_GET_LIST_PLACE_FAIL} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  listPlace: []
};

export const listPlaceReducer = (state = INITIAL_STATE, action: any) => {  
  switch(action.type) {
    case DO_GET_LIST_PLACE: 
    return Object.assign(
      {},
      state,
      {
        isLoading: true
      }
    );
    case DO_GET_LIST_PLACE_SUCCESS:      
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          listPlace: action.data
        }
      );
    case DO_GET_LIST_PLACE_FAIL:
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