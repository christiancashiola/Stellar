import * as APIUtil from '../util/comment_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const fetchComments = postId => dispatch => (
  APIUtil.fetchComments(postId).then(
    comments => dispatch(receiveComments(comments)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment,
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments,
});