import { combineReducers } from 'redux';

import types from '../actions/lists';


function allIds(state = [], action) {
  switch (action.type) {
    case types.FILL_LISTS:
      return [
        ...state,
        ...action.payload.ids
      ];
    default:
      return state;
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case types.FILL_LISTS:
      return {
        ...state,
        ...action.payload.map
      };
    default:
      return state;
  }
}

function meta(state = { fetching: false }, action) {
  switch (action.type) {
    case types.FETCH_LISTS_STATE:
      return state.set('fetching', action.payload);
    default:
      return state;
  }
}

export default combineReducers({
  allIds,
  byId,
  meta
});
