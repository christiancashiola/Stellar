import * as APIUtil from '../util/post-util';
import { receiveErrors } from './error_actions';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const fetchPosts = (criterion) => dispatch => (
  APIUtil.fetchPosts(criterion).then(
    posts => dispatch(receivePosts(posts)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const fetchPost = id => dispatch => (
  APIUtil.fetchPost(id).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const createPost = post => dispatch => (
  APIUtil.createPost(post).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const updatePost = post => dispatch => (
  APIUtil.updatePost(post).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const deletePost = id => dispatch => (
  APIUtil.deletePost(id).then(
    post => dispatch(removePost([Object.keys(post)[0]])),
    errors => dispatch(receiveErrors(errors))
  )
);

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePost = id => ({
  type: REMOVE_POST,
  id,
});
