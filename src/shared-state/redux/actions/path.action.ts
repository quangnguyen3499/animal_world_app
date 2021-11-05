export const DO_GET_PATH = 'DO_GET_PATH';
export const DO_GET_PATH_SUCCESS = 'DO_GET_PATH_SUCCESS';
export const DO_GET_PATH_FAIL = ' DO_GET_PATH_FAIL';

export const doGetPath = (
  place_id: string,
  floor_id: string,
  source: string,
  target: string,
) => ({
  type: DO_GET_PATH,
  place_id,
  floor_id,
  source,
  target,
});
