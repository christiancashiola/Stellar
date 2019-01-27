import React from 'react';

export const linkify = text => {
  switch (text.slice(0, 3)) {
    case 'htt':
      break;
    case 'www':
      text = 'https://' + text;
      break;
    default:
      text = 'https://www.' + text;
      break;
  }
  if (text.slice(text.length - 4) !== '.com') {
    text += '.com';
  }

  return <a className="link-style" href={`${text}`}>{text.slice(8)}</a>
};

export const getMedia = (mediaType) => {
  switch (mediaType) {
    case 'image':
      <img className="post-media" src={post.media} alt="media"/>
      break;
    case 'video':
        <video className="post-media" controls width="500">
          <source src={post.media} type="video/mp4"/>
        </video>
        break;
    case 'audio':
      <audio  controls src={post.media}></audio>
      break;
    default:
      null;
  }
}