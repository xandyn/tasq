import { createSelector } from 'reselect';


export const getListsIds = state => state.tasks.allIds;
export const getListsMap = state => state.tasks.byId;

export const getListById = createSelector(
  [getListsIds, getListsMap],
  (id, map) => map.get(id.toString())
);
