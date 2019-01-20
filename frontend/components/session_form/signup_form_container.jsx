import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  sessionErrors: errors.session,
  formType: 'Sign up',
  usernameField: (changeHandler) => (    
    <>
      <label htmlFor="username"></label>
      <input
      onChange={changeHandler('username')}
      type="text"
      placeholder="Username"
      id="username"/>
    </>
  )
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);