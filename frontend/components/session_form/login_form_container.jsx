import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const createSignupErrors = (errors) => {
  if (!errors.length) {
    return null;
  } else if (errors.split('.').length === 3) {
    return "You do have to fill this stuff out, you know.";
  } else if (errors.includes("Password")) {
    return "The password must be at least 8 characters.";
  } else {
    return "Your email or password were incorrect.";
  }
};

const mapStateToProps = ({ errors }) => ({
  sessionErrors: errors.session,
  formType: 'Log in',
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);