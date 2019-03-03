import { RECEIVE_POST } from "../../actions/post_actions";
import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../../actions/error_actions";

const postErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      if (action.errors) {
        return action.errors;
      }
      return state;
    case RECEIVE_POST:
    case CLEAR_ERRORS:
      return [];

    default:
      return state;
  }
};

export default postErrorsReducer;
