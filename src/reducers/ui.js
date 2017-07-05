import { combineReducers } from 'redux';
import { PERSIST_REHYDRATE } from 'redux-offline/lib/constants';

import types from '../actions/ui';


function data(state = { screen: 'HomeScreen' }, action) {
  switch (action.type) {
    case types.SET_SCREEN:
      return {
        ...state,
        screen: action.payload
      };
    case PERSIST_REHYDRATE:
      return { ...state, ...action.payload.ui.data };
    default:
      return state;
  }
}

function meta(state = {}, action) {
  switch (action.type) {
    case PERSIST_REHYDRATE:
      return { ...state, ...action.payload.ui.meta };
    default:
      return state;
  }
}

export default combineReducers({
  data,
  meta
});
