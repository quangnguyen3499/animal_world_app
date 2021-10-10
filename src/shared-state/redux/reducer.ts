import { combineReducers } from 'redux';
import { 
  loginReducer, 
  logoutReducer, 
  markerReducer, 
  pathReducer, 
  registerReducer 
} from './reducers';

const rootReducer = combineReducers({
  user: loginReducer,
  register: registerReducer,
  logout: logoutReducer,
  markers: markerReducer,
  path: pathReducer
});

export default rootReducer;