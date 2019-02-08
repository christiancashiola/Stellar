import React from 'react';

export const linkify = text => {
  return <a className="link-style" href={`${text}`}>{text.slice(8)}</a>
};

export const getMedia = (post) => {
  switch (post.media_type) {
    case 'image':
      return <img className="post-media" src={post.media} alt="media"/>
    case 'video':
      return (
        <video className="post-media" controls width="500">
          <source src={post.media} type="video/mp4"/>
        </video>
      );
    case 'audio':
      return <audio controls src={post.media}></audio>
    default:
      return null;
  }
}