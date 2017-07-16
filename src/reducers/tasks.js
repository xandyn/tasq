import { combineReducers } from 'redux';

import types from '../actions/tasks';


function allIds(state = [], action) {
  switch (action.type) {
    case types.SYNC_TASKS:
      return [
        ...Object.keys(action.payload || [])
      ];
    default:
      return state;
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case types.SYNC_TASKS:
      return {
        ...action.payload || {}
      };
    default:
      return state;
  }
}

function meta(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  allIds,
  byId,
  meta
});
