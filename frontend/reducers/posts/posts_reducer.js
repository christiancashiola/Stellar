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
      return merge({}, state, action.posts);

    case RECEIVE_POST:
      let newState = merge({}, state);
      const postId = Object.keys(action.post)[0];
      if (state[postId]) {
        delete newState[postId];
      }
      return merge({}, newState, action.post);
    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;

    default:
      return state;
  }
};

export default postReducer;