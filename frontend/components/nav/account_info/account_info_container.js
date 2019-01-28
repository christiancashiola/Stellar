import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import AccountInfo from './account_info';

const mapStateToProps = ({ session, entities }) => {
  const currentUser = entities.users[session.currentUserId];

  return { currentUser };
};


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
