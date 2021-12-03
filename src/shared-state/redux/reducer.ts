import {combineReducers} from 'redux';
import {
  loginReducer,
  logoutReducer,
  shopReducer,
  pathReducer,
  registerReducer,
  placeDetailReducer,
  listplaceReducer,
  accountReducer,
  cityReducer,
} from './reducers';

const rootReducer = combineReducers({
  user: loginReducer,
  register: registerReducer,
  logout: logoutReducer,
  shops: shopReducer,
  path: pathReducer,
  placeDetail: placeDetailReducer,
  listplace: listplaceReducer,
  account: accountReducer,
  city: cityReducer,
});

export default rootReducer;
