import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';

// For now, until mobile support for splash is available
export default ({ demoLogin, location }) => {

  let getStartedBtn = (
    <Link to="/register">
      <button className="lg-blue-btn">Get Started</button>
    </Link>
  );
  
  let loginBtn = (
    <Link to="/login">
      <button className="login-lg">Log In</button>
    </Link>
  );

  const pathname = location.pathname
  if (pathname === '/register' || pathname === '/login') {
    getStartedBtn = null;
    loginBtn = null;
  }
  
  const mainSplashStyle = {
    background: `url( ${ window.splashUrl1 })`,
    position: 'relative',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
  };
  
  return (
    <section className="splash-container">
      <article 
        className="splash-article" 
        id="splash-0" 
        style={mainSplashStyle}>
        <div className="mid-content mobile-splash">
          <span id="main-header">
            <i className="far fa-star-half"></i>
            <h1 className="head-logo logo">stellar</h1>
          </span>
          <p>Discover yourself<br/>amongst the stars.</p>
          <Route path="/register" component={SignUpFormContainer} />
          <Route path='/login' component={LoginFormContainer} />
          {getStartedBtn}
          {loginBtn}
          <button 
            onClick={demoLogin}
            className="demo-login">Demo Login
          </button>
        </div>
      </article>
    </section>
  )
}