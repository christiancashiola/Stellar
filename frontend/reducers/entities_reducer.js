import { combineReducers } from 'redux';
import users from './users/users_reducer';
import recommendedUsers from './users/recommended_users_reducer';
import posts from './posts/posts_reducer';

const entitiesReducer = combineReducers({
  users,
  posts,
  recommendedUsers,
});

export default entitiesReducer;