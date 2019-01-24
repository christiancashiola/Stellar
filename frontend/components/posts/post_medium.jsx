import React from 'react';
import { Link } from 'react-router-dom';

export default () => {

  return (
    
    <div className="post-medium">
      <Link to="/dashboard/new/text" className="medium">
        <div className="bg-circle white">
          <span id="aa">Aa</span>
        </div>
      </Link>
    
      <Link to="/dashboard/new" className="medium">
        <div className="bg-circle red">
          <i className="fas fa-camera-retro"></i>
        </div>
      </Link>
    
      <button className="medium">
        <div className="bg-circle yellow">
          <i className="fas fa-quote-left"></i>
        </div>
      </button>

      <button className="medium">
        <div className="bg-circle green">
          <i className="fas fa-link"></i>
        </div>
      </button>

      <button className="medium">
        <div className="bg-circle purple">
          <i className="fas fa-headphones-alt"></i>
        </div>
      </button>

      <button className="medium">
        <div className="bg-circle gray">
          <i className="fas fa-video"></i>
        </div>
      </button>
    </div>
  );
};