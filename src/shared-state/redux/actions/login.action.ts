export const DO_LOGIN = "DO_LOGIN";
export const DO_LOGIN_SUCCESS = "DO_LOGIN_SUCCESS";
export const DO_LOGIN_FAIL = " DO_LOGIN_FAIL";

export const doLogin = (email: string, password: string) => ({
    type: DO_LOGIN,
    email,
    password,
});