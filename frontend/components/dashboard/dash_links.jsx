import React from 'react';
import { Link } from 'react-router-dom';

const DashLinks = () => {
  return (
    <section className="dash-links">
      <img className="pofile-pic"   src="https://via.placeholder.com/75" alt="profile-pic"/>
      <div className="icon-container">
        <div className="icon-wrapper">
          <Link to="/dashboard/new" className="text pop-up">Aa</Link>
          <span className="sm-gray-text">Text</span>
        </div>
        
        <div className="vert-line"></div>
        <div className="icon-wrapper">
          <Link to="/dashboard/new" className="photo pop-up">
            <i className="fas fa-camera-retro"></i>
          </Link>
          <span className="sm-gray-text">Photo</span>
        </div>

        <div className="vert-line"></div>
        <div className="icon-wrapper">
          <button className="quote pop-up">
            <i className="fas fa-quote-left"></i>
          </button>
          <span className="sm-gray-text">Quote</span>
        </div>

        <div className="vert-line"></div>
        <div className="icon-wrapper">
          <button className="link pop-up">
            <div className="circle"><i className="fas fa-link"></i></div>
          </button>
          <span className="sm-gray-text">Link</span>
        </div>

        <div className="vert-line"></div>
        <div className="icon-wrapper">
          <button className="audio pop-up">
            <i className="fas fa-headphones-alt"></i>
          </button>
          <span className="sm-gray-text">Audio</span>
        </div>

        <div className="vert-line"></div>
        <div className="icon-wrapper">
          <button className="video pop-up">
            <i className="fas fa-video"></i>
          </button>
          <span className="sm-gray-text">Video</span>
        </div>
      </div>
    </section>
  );
};

export default DashLinks;