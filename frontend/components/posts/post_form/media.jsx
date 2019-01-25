import React from 'react';

const Media = ({ type }) => {
  if (type.includes('photo')) {
    return (
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
  }
  return (
    <>
      <label id="media-label" htmlFor="media-input">
      <div className="media-icon-wrapper">
        <i className="fas fa-plus"></i>
        <i class="fas fa-video"></i>
      </div>
      Upload a video
      :) 
      </label>
    </>
  );
};

export default Media;