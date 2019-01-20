import { connect } from 'react-redux';
import Nav from './nav';

const mapStateToProps = ({ entities, session }) => {
  const currentUserId = session[Object.keys(session)[0]];
  const currentUser = entities.users[currentUserId];

  return { currentUser };
};

export default connect(mapStateToProps)(Nav);