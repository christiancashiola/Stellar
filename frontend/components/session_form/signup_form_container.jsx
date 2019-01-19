import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  navLink: <Link to='/login'>Or Log In</Link>,
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);