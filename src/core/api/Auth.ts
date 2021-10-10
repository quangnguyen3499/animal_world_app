import AsyncStorage from "@react-native-community/async-storage";

export const IS_LOGGED_IN = "false"

export const onSignIn = () => AsyncStorage.setItem(IS_LOGGED_IN, "true");

export const onSignOut = () => AsyncStorage.removeItem(IS_LOGGED_IN);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(IS_LOGGED_IN)
      .then((res: any) => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err: any) => reject(err));
  });
};