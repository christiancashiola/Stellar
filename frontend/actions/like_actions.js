import * as APIUtil from '../util/like_util';
import { receivePost } from './post_actions';

export const createLike = postId => dispatch => (
  APIUtil.createLike(postId).then(
    post => dispatch(receivePost(post))
  )
);

export const removeLike = likeId => dispatch => (
  APIUtil.removeLike(likeId).then(
    post => dispatch(receivePost(post))
  )
);