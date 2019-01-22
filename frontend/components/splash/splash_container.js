import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const mapDispatchToProps = dispatch => {
  const demoUser = { email: 'demo@demo.com', password: '12345678' };
  return { demoLogin: () => dispatch(login(demoUser)) };
};

export default connect(null, mapDispatchToProps)(Splash);