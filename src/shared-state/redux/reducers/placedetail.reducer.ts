import {
  DO_GET_PLACE,
  DO_GET_PLACE_SUCCESS,
  DO_GET_PLACE_FAIL,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  placeDetail: {},
  images: [],
};

export const placeDetailReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case DO_GET_PLACE:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DO_GET_PLACE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        placeDetail: action.data,
        images: [],
      });
    case DO_GET_PLACE_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      break;
  }
  return state;
};
