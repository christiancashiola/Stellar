import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SplashContainer from './splash/splash_container';

const App = props => {
  return (
    <>
      <Route path='/login' component={LoginFormContainer} />
      <Route path='/signup' component={SignUpFormContainer} />

      <Route exact path='/' component={SplashContainer} />
    </>
  )
};

export default App;