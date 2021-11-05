import {
  DO_GET_MARKER,
  DO_GET_MARKER_SUCCESS,
  DO_GET_MARKER_FAIL,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  markers: [],
};

export const markerReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case DO_GET_MARKER:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DO_GET_MARKER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        markers: action.data.data,
      });
    case DO_GET_MARKER_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    default:
      break;
  }
  return state;
};
