export const DO_CHANGE_AVATAR = 'DO_CHANGE_AVATAR';
export const DO_CHANGE_AVATAR_SUCCESS = 'DO_CHANGE_AVATAR_SUCCESS';
export const DO_CHANGE_AVATAR_FAIL = 'DO_CHANGE_AVATAR_FAIL';

export const doChangeAvatar = (user_id: any, media: any) => ({
  type: DO_CHANGE_AVATAR,
  user_id,
  media,
});
