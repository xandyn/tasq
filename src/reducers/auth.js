import { combineReducers } from 'redux';

import types from '../actions/auth';


function data(state = {}, action) {
  switch (action.type) {
    case types.SYNC_PROFILE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

function meta(state = { isAuth: false, isAuthSkipped: false }, action) {
  switch (action.type) {
    case types.CHANGE_AUTH_STATE:
      return {
        ...state,
        isAuth: action.payload
      };
    case types.CHANGE_AUTH_SKIPPED_STATE:
      return {
        ...state,
        isAuthSkipped: action.payload
      };
    default:
      return state;
  }
}

export default combineReducers({
  data,
  meta
});
