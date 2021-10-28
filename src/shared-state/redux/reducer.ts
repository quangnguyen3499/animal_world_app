import { combineReducers } from 'redux';
import { 
  loginReducer, 
  logoutReducer, 
  markerReducer, 
  pathReducer, 
  registerReducer,
  placeDetailReducer,
  listPlaceReducer,
} from './reducers';

const rootReducer = combineReducers({
  user: loginReducer,
  register: registerReducer,
  logout: logoutReducer,
  markers: markerReducer,
  path: pathReducer,
  placeDetail: placeDetailReducer,
  listPlace: listPlaceReducer,
});

export default rootReducer;