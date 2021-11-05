export const DO_UPDATE_ACCOUNT = 'DO_UPDATE_ACCOUNT';
export const DO_UPDATE_ACCOUNT_SUCCESS = 'DO_UPDATE_ACCOUNT_SUCCESS';
export const DO_UPDATE_ACCOUNT_FAIL = ' DO_UPDATE_ACCOUNT_FAIL';

export const doUpdateAccount = (id: any, username: string) => ({
  type: DO_UPDATE_ACCOUNT,
  id,
  username,
});
