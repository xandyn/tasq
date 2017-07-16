import { createSelector } from 'reselect';


export const getTasksIds = state => state.tasks.allIds;
export const getTasksMap = state => state.tasks.byId;

export const getAllTasks = createSelector(
  [getTasksIds, getTasksMap],
  (id, map) => id.map(i => map[i])
);
