import * as APIUtil from '../util/post-util';
import { receiveErrors } from './error_actions';
import { startLoadingPosts } from './ui_actions';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const CLEAR_POSTS = 'CLEAR_POSTS';

export const fetchPosts = (pathname, page) => dispatch => {
  dispatch(startLoadingPosts());
  APIUtil.fetchPosts(pathname, page).then(
    posts => dispatch(receivePosts(posts)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const fetchPost = id => dispatch => (
  APIUtil.fetchPost(id).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createPost = post => dispatch => (
  APIUtil.createPost(post).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const updatePost = post => dispatch => (
  APIUtil.updatePost(post).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deletePost = id => dispatch => (
  APIUtil.deletePost(id).then(
    post => dispatch(removePost([Object.keys(post)[0]])),
    errors => dispatch(receiveErrors(errors.responseJSON))
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

export const clearPosts = () => ({
  type: CLEAR_POSTS,
});
