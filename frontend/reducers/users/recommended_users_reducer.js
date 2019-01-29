import { RECEIVE_RECOMMENDED_USERS } from '../../actions/user_actions';

const recommendedUsersReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RECOMMENDED_USERS:
      return action.users;
      
    default:
      return state;
  }
};

export default recommendedUsersReducer;