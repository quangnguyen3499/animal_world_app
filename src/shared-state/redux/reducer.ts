import {combineReducers} from 'redux';
import {
  loginReducer,
  logoutReducer,
  markerReducer,
  pathReducer,
  registerReducer,
  placeDetailReducer,
  listplaceReducer,
  accountReducer,
  avatarReducer,
} from './reducers';

const rootReducer = combineReducers({
  user: loginReducer,
  register: registerReducer,
  logout: logoutReducer,
  markers: markerReducer,
  path: pathReducer,
  placeDetail: placeDetailReducer,
  listplace: listplaceReducer,
  account: accountReducer,
  avatar: avatarReducer,
});

export default rootReducer;
