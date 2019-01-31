import { RECEIVE_TAGS, CLEAR_TAGS } from "../../actions/tag_actions";

const tagsReducers = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case CLEAR_TAGS:
      return [];
    default:
      return state;
  }
};

export default tagsReducers;