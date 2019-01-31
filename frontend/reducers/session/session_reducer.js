import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER 
} from '../../actions/session_actions';
import { setColors } from '../../util/ui_util';

const _nullSession = { id: null };

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      setColors(action.user.modern_colors);
      return { currentUserId: action.user.id };

    case LOGOUT_CURRENT_USER:
      document.querySelector('nav').style.backgroundColor = 'transparent';
      return _nullSession;
      
    default:
      return state;
  }
};

export default sessionReducer;