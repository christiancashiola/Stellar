import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoggedInNav from './logged_in_nav';

const Nav = ({ currentUser, openModal }) => {
// TODO: refactor currentUser if unnecessary
  let display = (
    <div className="spash-nav-btns">
      <NavLink activeClassName="hidden" to="/login">
        <button className="login-sm">Log In</button>
      </NavLink>

      <NavLink activeClassName="hidden" to="/register">
        <button className="sign-up">Sign Up</button>
      </NavLink>
    </div>
  );

  if (currentUser) {
    display = <LoggedInNav openModal={openModal} currentUser={currentUser} />
  }

  return (
    <nav className="nav" id="top">
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