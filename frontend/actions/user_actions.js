import * as APIUtil from '../util/user_util';
import { receiveErrors } from './error_actions';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const updateUser = (userId, data) => dispatch => (
  APIUtil.updateUser(userId, data).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});