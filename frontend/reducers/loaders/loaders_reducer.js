import { RECEIVE_POSTS } from '../../actions/post_actions';
import { START_LOADING_POSTS } from '../../actions/ui_actions';

const defaultState = { postsLoading: false };

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_POSTS:
      return Object.assign({}, state, { postsLoading: true });
    case RECEIVE_POSTS:
    return Object.assign({}, state, { postsLoading: false });
    default:
      return state;
  }
};