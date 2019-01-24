import { combineReducers } from 'redux';
import modals from '../modals/modal_reducer';

const UiReducer = combineReducers({
  modals,
});

export default UiReducer;