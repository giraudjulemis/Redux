const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

addTodo = (text) => {
  return { type: ADD_TODO, text };
}

toggleTodo = (index) => {
  return { type: TOGGLE_TODO, index };
}

setVisibilityFilter = (filter) => {
  return { type: SET_VISIBILITY_FILTER, filter };
}
