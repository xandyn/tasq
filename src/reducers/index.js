import { combineReducers } from 'redux';

import auth from './auth';
import lists from './lists';
import ui from './ui';


const rootReducer = combineReducers({
  auth,
  lists,
  ui,
});

export default rootReducer;
