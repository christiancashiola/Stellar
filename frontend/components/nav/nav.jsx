import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoggedInNav from './logged_in_nav';

const Nav = props => {
// TODO: refactor currentUser if unnecessary
  const { currentUser, openModal } = props
  const path = props.location.pathname.split('/')[1];
  let display;
  if (path) {
    display = (
      <div className="spash-nav-btns">
        <NavLink activeClassName="hidden" to="/login">
          <button className="login-sm">Log In</button>
        </NavLink>

        <NavLink activeClassName="hidden" to="/register">
          <button className="sign-up">Sign Up</button>
        </NavLink>
      </div>
    );
  }

  let bgStyle = { backgroundColor: 'transparent' };
  if (currentUser) {
    bgStyle = { backgroundColor: '#36455D' };
    display = <LoggedInNav openModal={openModal} currentUser={currentUser} />
  }

  return (
    <nav className="nav" id="top" style={bgStyle}>
      <div className="logo-wrapper">
        <Link className="logo-link" to={currentUser ? '/dashboard' : '/'}>
          <button className="logo"><i className="far fa-star-half"></i>S</button>
        </Link>
      </div>

      {display}
  </nav>
  );
};

export default Nav;