import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = ({ currentUser, logout }) => {
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
      <div className="dash-nav-btns">
        <Link to="#">
          <button className="nav-link"><i className="fas fa-home"></i></button>
        </Link>
        <Link to="#">
          <button className="nav-link"><i className="far fa-compass"></i></button>
        </Link>

        <button 
          onClick={logout}
          className="nav-link"><i className="fas fa-user"></i>
        </button>
        <button 
          className="create-post"><i className="fas fa-pencil-alt"></i>
        </button>
      </div>
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