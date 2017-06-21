import { combineReducers } from 'redux';

import types from '../actions/ui';


function data(state = { screen: 'HomeScreen' }, action) {
  switch (action.type) {
    case types.SET_SCREEN:
      return {
        ...state,
        screen: action.payload
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
