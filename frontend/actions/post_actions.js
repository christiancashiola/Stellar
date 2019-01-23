import * as APIUtil from '../util/post-util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const fetchPosts = (criterion) => dispatch => (
  APIUtil.fetchPosts(criterion).then(
    posts => dispatch(receivePosts(posts)),
    err => console.log(err)
  )
);

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
});

