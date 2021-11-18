export const DO_UPDATE_ACCOUNT = 'DO_UPDATE_ACCOUNT';
export const DO_UPDATE_ACCOUNT_SUCCESS = 'DO_UPDATE_ACCOUNT_SUCCESS';
export const DO_UPDATE_ACCOUNT_FAIL = ' DO_UPDATE_ACCOUNT_FAIL';

export const doUpdateAccount = (user_id: any, username: string, media: string) => ({
  type: DO_UPDATE_ACCOUNT,
  user_id,
  username,
  media,
});
