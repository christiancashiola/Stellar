import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/ui_actions';
import { Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

const PostMedium = props => {

  const handleClick = () => {
    props.closeModal();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="post-medium">
      <Link to="/dashboard/new/text" onClick={handleClick} className="medium">
        <div className="bg-circle white">
          <span id="aa">Aa</span>
        </div>
      </Link>
    
      <Link to="/dashboard/new/photo" onClick={handleClick} className="medium">
        <div className="bg-circle red">
          <i className="fas fa-camera-retro"></i>
        </div>
      </Link>
    
      <Link to="/dashboard/new/quote" onClick={handleClick} className="medium">
        <div className="bg-circle yellow">
          <i className="fas fa-quote-left"></i>
        </div>
      </Link>

      <Link to="/dashboard/new/link" onClick={handleClick} className="medium">
        <div className="bg-circle green">
          <i className="fas fa-link"></i>
        </div>
      </Link>

      <Link to="/dashboard/new/audio" onClick={handleClick} className="medium">
        <div className="bg-circle purple">
          <i className="fas fa-headphones-alt"></i>
        </div>
      </Link>

      <Link to="/dashboard/new/video" onClick={handleClick} className="medium">
        <div className="bg-circle gray">
          <i className="fas fa-video"></i>
        </div>
      </Link>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(PostMedium);