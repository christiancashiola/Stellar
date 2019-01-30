import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/user_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      let newState = merge({}, state);
      const userId = Object.values(action.user)[0];
      if (state[userId]) {
        delete newState[userId];
      }
      return merge({}, newState, { [action.user.id]: action.user });
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;