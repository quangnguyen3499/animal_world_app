export const DO_GET_PLACE = 'DO_GET_PLACE';
export const DO_GET_PLACE_SUCCESS = 'DO_GET_PLACE_SUCCESS';
export const DO_GET_PLACE_FAIL = 'DO_GET_PLACE_FAIL';

export const doGetPlaceDetail = (place_id: string) => ({
  type: DO_GET_PLACE,
  place_id,
});
