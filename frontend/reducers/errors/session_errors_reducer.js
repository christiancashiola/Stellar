import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import {
  CLEAR_ERRORS, 
  RECEIVE_ERRORS
} from "../../actions/error_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
      
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
      return [];
      
    default:
      return state;
  }
};

export default sessionErrorsReducer;