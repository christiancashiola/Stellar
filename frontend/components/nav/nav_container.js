import { connect } from 'react-redux';
import Nav from './nav';
import { openModal } from '../../actions/ui_actions';
import { setColors } from '../../util/ui_util';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  setColors: bool => dispatch(setColors(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);