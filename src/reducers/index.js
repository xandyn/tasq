import { combineReducers } from 'redux';

import lists from './lists';
import ui from './ui';


const rootReducer = combineReducers({
  lists,
  ui,
});

export default rootReducer;
