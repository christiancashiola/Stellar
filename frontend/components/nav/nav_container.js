import { connect } from 'react-redux';
import { openModal } from '../../actions/ui_actions';
import { setColors } from '../../util/ui_util';
import { clearPosts } from '../../actions/post_actions';
import Nav from './nav';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  setColors: bool => dispatch(setColors(bool)),
  clearPosts: () => dispatch(clearPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);