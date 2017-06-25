import { combineReducers } from 'redux';

import types from '../actions/auth';


function data(state = { isAuth: false, isAuthSkipped: false }, action) {
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

function meta(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  data,
  meta
});
