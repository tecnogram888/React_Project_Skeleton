import { createStore } from 'redux';
import { combineReducers } from 'redux';
import visibilityFilter from './../components/TodoApp/redux/reducers/visibilityFilter';
import todos from './../components/TodoApp/redux/reducers/todos';
import baseReducer from './../reducers';

export default createStore(
  combineReducers({ baseReducer, todos, visibilityFilter })
);
