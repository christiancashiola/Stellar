import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { updateColorTheme } from '../../../actions/user_actions';
import AccountInfo from './account_info';

const mapStateToProps = ({ session }) => ({
  currentUserId: session.currentUserId,
});


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateColorTheme: (currentUserId, bool) => {
    dispatch(updateColorTheme(currentUserId, bool));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
