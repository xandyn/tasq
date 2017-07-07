const types = {};


types.SYNC_TASKS = 'tasks/SYNC_TASKS';
export function syncTasks(payload) {
  return {
    type: types.SYNC_TASKS,
    payload
  };
}

types.CLEAR_TASKS = 'tasks/CLEAR_TASKS';
export function clearTasks(payload) {
  return {
    type: types.CLEAR_TASKS,
    payload
  };
}

types.CREATE_TASK = 'tasks/CREATE_TASK';
export function createTask(payload) {
  return {
    type: types.CREATE_TASK,
    payload
  };
}

types.UPDATE_TASK = 'tasks/UPDATE_TASK';
export function updateTask(payload) {
  return {
    type: types.UPDATE_TASK,
    payload
  };
}

types.DELETE_TASK = 'tasks/DELETE_TASK';
export function deleteTask(payload) {
  return {
    type: types.DELETE_TASK,
    payload
  };
}


export default types;
