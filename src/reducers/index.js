import {combineReducers} from 'redux';
import users from './users';
import user from './user';
import weights from './weights';

export default combineReducers({
  users,
  user,
  weights,
});