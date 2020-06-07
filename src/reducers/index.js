import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import todoListReducer from './todoListReducer';
import isClearedReducer from './isClearedReducer';

export default combineReducers({
    todoList: todoListReducer,
    isCleared: isClearedReducer,
    form: formReducer
});
