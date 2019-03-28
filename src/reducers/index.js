import {combineReducers} from 'redux';
import users from './users';
import user from './user';
import runs from './runs';

export default combineReducers({
  users,
  user,
  runs,
});