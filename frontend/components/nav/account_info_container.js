import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import AccountInfo from './account_info';

const mapStateToProps = ({ session, entities }) => {
  const currentUserID = session[Object.keys(session)[0]];
  const currentUser = entities.users[currentUserID];

  return { currentUser };
};


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
