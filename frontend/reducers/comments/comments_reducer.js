import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  REMOVE_COMMENT,
} from "../../actions/comment_actions";
import { merge } from 'lodash';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT:
    let newState = merge({}, state);
    const commentId = Object.keys(action.comment)[0];
    if (state[commentId]) {
      delete newState[commentId];
    }
    return merge({}, newState, action.comment);
    case RECEIVE_COMMENTS:
      return action.comments;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;