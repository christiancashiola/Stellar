import { combineReducers } from 'redux';
import users from './users/users_reducer';

const entitiesReducer = combineReducers({
  users,
});

export default entitiesReducer;