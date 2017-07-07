import { combineReducers } from 'redux';

import auth from './auth';
import tasks from './tasks';
import ui from './ui';


const rootReducer = combineReducers({
  auth,
  tasks,
  ui,
});

export default rootReducer;
