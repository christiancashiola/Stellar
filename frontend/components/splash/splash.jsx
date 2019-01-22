import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';

const Splash = (props) => {
  
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

  const pathname = props.location.pathname
  if (pathname === '/register' || pathname === '/login') {
    getStartedBtn = null;
    loginBtn = null;
  }

  return (
    <section className="splash">
      <div className="mid-content">
        <h1 className="head-logo logo"><i className="far fa-star-half"></i>stellar</h1>
        <p>
          Discover yourself<br/>amongst the stars.
        </p>

        <Route path="/register" component={SignUpFormContainer} />
        <Route path='/login' component={LoginFormContainer} />
        
        {getStartedBtn}
        {loginBtn}
        <button 
          onClick={props.demoLogin}
          className="demo-login">Demo Login
        </button>
      </div>
      
      <div className="footer">
        <a className="git-link" href="https://github.com/christiancashiola">
        <img className="git-img" src="/assets/git_logo.png" alt="github logo"/>
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Splash;