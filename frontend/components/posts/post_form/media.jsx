import React from 'react';

const Media = ({ type }) => {
  let media;
  if (type.includes('photo')) {
    media = (
      <>
        <label id="media-label" htmlFor="media-input">
        <div className="media-icon-wrapper">
          <i className="fas fa-plus"></i>
          <i className="fas fa-camera-retro"></i>
        </div>
        Upload a photo
        :)  
        </label>
      </>
    );
  } else if (type.includes('audio')) {
    media = (
      <>
        <label id="media-label" htmlFor="media-input">
        <div className="media-icon-wrapper">
          <i className="fas fa-plus"></i>
          <i className="fas fa-headphones-alt"></i>
        </div>
        Upload audio
        :) 
        </label>
      </>
    );
  } else {
    media = (
      <>
        <label id="media-label" htmlFor="media-input">
        <div className="media-icon-wrapper">
          <i className="fas fa-plus"></i>
          <i className="fas fa-video"></i>
        </div>
        Upload a video
        :) 
        </label>
      </>
    );
  }

  return media;
};

export default Media;