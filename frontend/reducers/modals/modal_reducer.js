import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/ui_actions';

export default function modalReducer(state = null, action) {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return {
        type: action.modal,
        info: action.info
      };
      
    case CLOSE_MODAL:
      return null;
      
    default:
      return state;
  }
}