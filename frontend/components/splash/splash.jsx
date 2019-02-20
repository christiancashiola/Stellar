import React from 'react';
import { Link, Route } from 'react-router-dom';
import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';
import { hideHeader } from '../../util/ui_util';

export default ({ handleClick, demoLogin, location }) => {

  
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
          hideHeader();
         }} id="what-is-stellar">
          What is Stellar?
        </h3>
        <div className="splash-content-container">
          <i id="ornament-16" className="ornament fas fa-quote-left"></i>
          <i id="ornament-1" className="ornament fas fa-comments"></i>
          <i id="ornament-2" className="ornament fas fa-retweet"></i>
          <i id="ornament-3" className="ornament fas fa-infinity"></i>
          <i id="ornament-4" className="ornament fas fa-plus"></i>
          <i id="ornament-5" className="ornament far fa-heart"></i>
          <i id="ornament-6" className="ornament fas fa-user-astronaut"></i>
          <i id="ornament-7" className="ornament fas fa-space-shuttle"></i>
          <i id="ornament-8" className="ornament fas fa-meteor"></i>
          <i id="ornament-9" className="ornament fas fa-user-friends"></i>
          <i id="ornament-10" className="ornament fas fa-camera"></i>
          <i id="ornament-11" className="ornament fas fa-quote-left"></i>
          <i id="ornament-12" className="ornament fas fa-link"></i>
          <i id="ornament-14" className="ornament fas fa-video"></i>
          <i id="ornament-15" className="ornament fas fa-plus"></i>
          <i id="ornament-17" className="ornament fas fa-exclamation"></i>
          <i id="ornament-18" className="ornament fas fa-bookmark"></i>
          <i id="ornament-19" className="ornament fas fa-moon"></i>
          <i id="ornament-20" className="ornament fas fa-globe-americas"></i>
          <i id="ornament-21" className="ornament fas fa-sun"></i>
          <i id="ornament-13" className="ornament fas fa-headphones-alt"></i>
          <i id="ornament-22" className="ornament fas fa-pen"></i>
          <div className="sm-logo big-sm-logo">
            <i className="far fa-star-half"></i>
            <h5 id="logo-s">S</h5>
          </div>
        </div>
        <h2 id="splash-text-1" className="splash-page-text splash-page-header">
          Simple. Stellar is intuitive and easy to use.
        </h2>
        <p className="splash-page-text splash-page-paragraph">
          From sharing photos, exploring posts, leaving comments,
          or following others, Stellar keeps it straightforward. 
          The stars are yours to explore, without the rocket science.
        </p>
      </article>
      <article className="splash-article" id="splash-2">
         <div id="splash-text-2">
          <h2 className="splash-page-text splash-page-header">
            Spontaneous.<br />A place where you can be you!
          </h2>
          <p className="splash-page-text splash-page-paragraph">
            Stellar's community is diverse, respectful, and passionate.
            Users can fearlessly enjoy sharing what matters to them. 
            Check out the explore page to see what is trending.
          </p>
         </div>
         <div className="splash-post-container">
            <img
              src={`${window.splashPost1}`}
              alt="post"
              className="splash-post"
              id="splash-post-1"
            />
            <img
              src={`${window.splashPost2}`}
              alt="post"
              className="splash-post"
              id="splash-post-2"
            />
            <img
              src={`${window.splashPost3}`}
              alt="post"
              className="splash-post"
              id="splash-post-3"
            />
            <img
              src={`${window.splashPost4}`}
              alt="post"
              className="splash-post"
              id="splash-post-4"
            />
            <img
              src={`${window.splashPost5}`}
              alt="post"
              className="splash-post"
              id="splash-post-5"
            />
            <img
              src={`${window.splashPost6}`}
              alt="post"
              className="splash-post"
              id="splash-post-6"
            />
            <img
              src={`${window.splashPost1}`}
              alt="post"
              className="splash-post"
              id="splash-post-7"
            />
            <img
              src={`${window.splashPost2}`}
              alt="post"
              className="splash-post"
              id="splash-post-8"
            />
         </div>
      </article>
      <article className="splash-article" id="splash-3">
        <div id="splash-text-3">
          <h2 className="splash-page-text splash-page-header">
            Choices, choices.
          </h2>
         </div>
        <div className="splash-medium-container">
          <div className="circle-column-1">
            <div className="circle-text">
              <span className="circle-description">Text</span>
              <div id="first-white-circle" className="white-circle">
                <span id="aa">Aa</span>
              </div>
            </div>
            <div className="circle-text">
              <span className="circle-description">Video</span>
              <div className="white-circle">
                <i className="fas fa-video"></i>
              </div>
            </div>
            <div className="circle-text">
              <span className="circle-description">Photo</span>
              <div className="white-circle">
                <i className="fas fa-camera-retro"></i>
              </div>
            </div>
          </div>
          <div className="circle-column-2">
            <div className="circle-text">
              <div className="white-circle">
                <i className="fas fa-quote-left"></i>
              </div>
              <span className="circle-description">Quote</span>
            </div>
            <div className="circle-text">
              <div className="white-circle">
                <i className="fas fa-link"></i>
              </div>
              <span className="circle-description">Link</span>
            </div>
            <div className="circle-text">
              <div id="last-white-circle" className="white-circle">
                <i className="fas fa-headphones-alt"></i>
              </div>
              <span className="circle-description">Audio</span>
            </div>
          </div>
        </div>
        <div id="splash-text-4">
          <p className="splash-page-text splash-page-paragraph">
            With six different types of posting options, the sky is the limit.
            Also, Stellar is responsive so you can share musings from your smart phone.
            Give it try sometime!
          </p>
        </div>
      </article>
      <article className="splash-article" id="splash-4" style={lastSplashStyle}>
        <div className="last-mid-content last-splash">
          <h2 className="splash-page-header">
            The final frontier<br />ins't so "final" afterall...
          </h2>
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
};