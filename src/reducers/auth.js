import { combineReducers } from 'redux';
import { PERSIST_REHYDRATE } from 'redux-offline/lib/constants';

import types from '../actions/auth';


function data(state = {}, action) {
  switch (action.type) {
    case types.SYNC_PROFILE:
      return {
        ...state,
        ...action.payload
      };
    case types.CLEAR_PROFILE:
      return {};
    case PERSIST_REHYDRATE:
      return {
        ...state,
        ...action.payload.auth ? action.payload.auth.data : {}
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
    case types.CLEAR_PROFILE:
      return { isAuth: false, isAuthSkipped: false };
    case PERSIST_REHYDRATE:
      return {
        ...state,
        ...action.payload.auth ? action.payload.auth.meta : {}
      };
    default:
      return state;
  }
}

export default combineReducers({
  data,
  meta
});
