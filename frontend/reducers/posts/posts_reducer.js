import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
 } from '../../actions/post_actions';
 import { merge } from 'lodash';

const postReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;

    case RECEIVE_POST:
      return merge({}, state, action.post);

    case REMOVE_POST:
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
};

export default postReducer;