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
});

export default rootReducer;
