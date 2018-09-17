const {combineReducers} = Redux;

import todos from './todos.mjs';
import visibilityFilter from './visibilityFilter.mjs';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
});

export default rootReducer;
