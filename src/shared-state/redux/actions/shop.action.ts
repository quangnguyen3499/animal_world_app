export const DO_GET_SHOP = 'DO_GET_SHOP';
export const DO_GET_SHOP_SUCCESS = 'DO_GET_SHOP_SUCCESS';
export const DO_GET_SHOP_FAIL = ' DO_GET_SHOP_FAIL';

export const doGetListShop = (place_id: string, floor_id: any) => ({
  type: DO_GET_SHOP,
  place_id,
  floor_id,
});
