import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      // return Object.assign({}, state, {
      //   visibilityFilter: action.filter
      // });
      return { ...state, visibilityFilter: action.filter };
    default:
      return state;
  }
  return state;
};

export default todoApp;
