export const DO_GET_MARKER = 'DO_GET_MARKER';
export const DO_GET_MARKER_SUCCESS = 'DO_GET_MARKER_SUCCESS';
export const DO_GET_MARKER_FAIL = ' DO_GET_MARKER_FAIL';

export const doGetMarker = (place_id: string, floor_id: string) => ({
  type: DO_GET_MARKER,
  place_id,
  floor_id,
});
