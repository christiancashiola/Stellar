import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

const App = props => {
  return (
    <>
      <h1>Stellar</h1>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Log In</Link>
      <Route path='/login' component={LoginFormContainer} />
      <Route path='/signup' component={SignUpFormContainer} />
    </>
  )
};

export default App;