import * as APIUtil from '../util/follow_util';
import { receiveErrors } from './error_actions';
import { receiveUser } from "./user_actions";

export const follow = userId => dispatch => (
  APIUtil.follow(userId).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const unfollow = userId => dispatch => (
  APIUtil.unfollow(userId).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);