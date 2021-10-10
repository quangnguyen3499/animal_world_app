import { UserState } from '@core';
import {DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAIL, } from '../actions';

const INITIAL_STATE: UserState ={
  isLoading: false,
  isLogged: false,
  username: "",
};

export const loginReducer = (state = INITIAL_STATE, action: any) => {  
  switch(action.type) {
    case DO_LOGIN: 
    return Object.assign(
      {},
      state,
      {
        isLoading: true
      }
    );
    case DO_LOGIN_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          isLogged: true,
          username: action.username,
        }
      );
    case DO_LOGIN_FAIL:
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          error: action.error
        }
      );
      default:
        break;
  };
  return state;
}