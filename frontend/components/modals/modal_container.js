import { connect } from 'react-redux';
import { closeModal } from '../../actions/ui_actions';
import Modal from './modal';

const mapStateToProps = ({ ui }) => {
  const modals = ui.modals || {};
  return {
    modal: modals.type,
    info: modals.info,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);