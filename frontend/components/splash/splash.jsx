import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';


export default ({ handleClick, demoLogin, toggleHeaderVisibility, location }) => {

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

  const lastSplashStyle = {
    background: `url( ${ window.splashUrl2 })`,
    position: 'relative',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  };
  
  return (
    <>
    <ul id="splash-links">
      <button 
        className="glow sm-circle" 
        onClick={() => handleClick(0)}>
      </button>
      <button 
        className="sm-circle"
        onClick={() => handleClick(1)}>
      </button>
      <button 
        className="sm-circle"
        onClick={() => handleClick(2)}>
      </button>
      <button 
        className="sm-circle" 
        onClick={() => handleClick(3)}>
      </button>
      <button 
        className="sm-circle" 
        onClick={() => handleClick(4)}>
      </button>
    </ul>
    <section className="splash-container">
      <article className="splash-article" id="splash-0" style={mainSplashStyle}>
        <div className="mid-content">
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
      <article className="splash-article" id="splash-1">
        <h3 onClick={() => {
          handleClick(1);
          toggleHeaderVisibility();
         }} id="what-is-stellar">
          What is Stellar?
        </h3>

      </article>
      <article className="splash-article" id="splash-2">

      </article>
      <article className="splash-article" id="splash-3">

      </article>
      <article className="splash-article" id="splash-4" style={lastSplashStyle}>
        <div className="mid-content last-splash">
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
    <div className="footer">
        <a className="business-link" href="https://github.com/christiancashiola">
          <i className="fab fa-github"></i>
        </a>
        <a className="business-link" href="https://angel.co/christian-cashiola">
          <i className="fab fa-angellist"></i>
        </a>
        <a className="business-link" href="https://www.linkedin.com/in/christian-cashiola-48574616b/">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </>
  );
}