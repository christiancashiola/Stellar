import React from 'react';

const PostFeatures = ({openModal, post, currentUserId, like, unlike, admin}) => {
  const postSettings = (
    <button 
      onClick={() => openModal('post settings', post)} 
      className="post-feature-icon">
      <i className="fas fa-cog"></i>
    </button>
  );

  let likeAction, likeStyle, color;
    const currentUsersLike = post.likes.map(like => {
      if (like.user_id === currentUserId) {
        return like;
      }
    })[0];

  if (currentUsersLike) {
    likeAction = () => unlike(currentUsersLike.id);
    likeStyle = "fas fa-heart";
    color = 'red-heart';
  } else {
    likeStyle = "far fa-heart";
    likeAction = () => like(post.id);
  }

  const likeBtn = (
    <button 
      onClick={likeAction} 
      className={`post-feature-icon ${color}`}>
      <i className={likeStyle}></i>
    </button>
  );

  const commentBtn = (
    <button 
      onClick={() => openModal('comment', post)} 
      className={`post-feature-icon`}>
      <i className="far fa-comment"></i>
    </button>
  );
  
  return (
    <div className="settings-likes-comments-wrapper">
      { currentUserId === post.user_id || admin ? postSettings : null }
      { commentBtn }
      { currentUserId === post.user_id ? null : likeBtn }
    </div>
  );
};

export default PostFeatures