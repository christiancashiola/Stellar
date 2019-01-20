import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = ({ currentUser }) => {
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
    display = (
      <div>Hello {currentUser.username}</div>
    );
  }

  
  return (
    <nav className="nav">
      <div className="logo-wrapper">
        <Link className="logo-link" to="/">
          <button className="logo"><i className="far fa-star-half"></i>S</button>
        </Link>
      </div>

      {display}
  </nav>
  );
};

export default Nav;