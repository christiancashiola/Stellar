import { combineReducers } from 'redux';
import users from './users/users_reducer';
import recommendedUsers from './users/recommended_users_reducer';
import posts from './posts/posts_reducer';
import comments from './comments/comments_reducer';
import tags from './tags/tags_reducer';

const entitiesReducer = combineReducers({
  users,
  posts,
  comments,
  recommendedUsers,
  tags,
});

export default entitiesReducer;