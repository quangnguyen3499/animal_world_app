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
} from './reducers';

const rootReducer = combineReducers({
  user: loginReducer,
  register: registerReducer,
  logout: logoutReducer,
  markers: markerReducer,
  path: pathReducer,
  placeDetail: placeDetailReducer,
  listplace: listplaceReducer,
  username: accountReducer,
});

export default rootReducer;
