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
    case ADD_TODO:
      // return Object.assign({}, state, {
      //   todos: [
      //     ...state.todos,
      //     {
      //       text: action.text,
      //       completed: false
      //     }
      //   ]
      // });
      return {
        ...state,
        todos: [
          ...state.todos, { text: action.text, completed: false }
        ]
      };
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo;
        })
      });
    default:
      return state;
  }
};

export default todoApp;
