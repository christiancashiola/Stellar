import * as APIUtil from '../util/comment_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const createComment = (comment, postId) => dispatch => (
  APIUtil.createComment(comment, postId).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const fetchComments = postId => dispatch => (
  APIUtil.fetchComments(postId).then(
    comments => dispatch(receiveComments(comments)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deleteComment = comment => dispatch => (
  APIUtil.deleteComment(comment).then(
    comment => dispatch(removeComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const updateComment = comment => dispatch => (
  APIUtil.updateComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
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

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  commentId: comment.id,
});