import { connect } from 'react-redux';
import Nav from './nav';
import { openModal } from '../../actions/ui_actions';

const mapStateToProps = ({ entities, session }) => {
  const currentUserID = session[Object.keys(session)[0]];
  const currentUser = entities.users[currentUserID];

  return { currentUser };
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);