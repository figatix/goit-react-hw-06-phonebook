import { nanoid } from 'nanoid';

export const setFilterState = text => {
  return {
    type: 'filter/setFilterState',
    payload: text,
  };
};

export const addTask = text => {
  return {
    type: 'tasks/addTask',
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'tasks/deleteTask',
    payload: taskId,
  };
};

export const toggleCompleted = taskId => {
  return {
    type: 'tasks/toggleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = status => {
  return {
    type: 'filter/setStatusFilter',
    payload: status,
  };
};

// const addTask = {
//   type: 'tasks/addTask',
//   payload: {
//     id: 'Generated id',
//     text: 'User entered text',
//     completed: false,
//   },
// };
// const deleteTask = {
//   type: 'tasks/deleteTask',
//   payload: 'Task id',
// };
// const toggleCompleted = {
//   type: 'tasks/toggleCompleted',
//   payload: 'Task id',
// };
// const setStatusFilter = {
//   type: 'filters/setStatusFilter',
//   payload: 'Filter value',
// };
