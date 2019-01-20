import React from 'react';
import { Link } from 'react-router-dom';

const Splash = props => {

  return (
    <section className="splash">
      <nav className="splash-nav">
        <Link className="logo-link" to="/">
          <button class="logo"><i class="far fa-star-half"></i>S</button>
        </Link>

        <div className="spash-nav-btns">
          <Link to="/login"><button className="login-sm">Log In</button></Link>
          <Link to="/signup"><button className="sign-up">Sign Up</button></Link>
        </div>
      </nav>

      <div className="mid-content">
        <h1 className="head-logo logo"><i class="far fa-star-half"></i>stellar</h1>
        <p>
          Discover treasures<br/>amongst the stars.
        </p>
        
        <Link to="/signup"><button class="get-started">Get Started</button></Link>
        <Link to="/signup"><button class="login-lg">Log In</button></Link>
      </div>

    </section>


  );
};

export default Splash;