import { combineReducers } from 'redux';
import modals from '../modals/modal_reducer';
import loaders from '../loaders/loaders_reducer';

const UiReducer = combineReducers({
  loaders,
  modals,
});

export default UiReducer;