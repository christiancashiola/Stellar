import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoggedInNav from './logged_in_nav';
import { setColors } from '../../util/ui_util';

const Nav = props => {
  const { currentUser, openModal, clearPosts, fetchTags } = props;
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
  if (currentUser) {
    setColors(currentUser.modernColors);
    display = (
      <LoggedInNav 
        openModal={openModal} 
        clearPosts={clearPosts}
        fetchTags={fetchTags}
        currentUser={currentUser}
        tags={props.tags}
        clearTags={props.clearTags} />
    );
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