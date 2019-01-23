import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session/session_reducer';
import errors from './errors/errors_reducer';
import posts from './posts/posts_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  posts,
});

export default rootReducer;