import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post, deletePost, updatePost }) => {
  // TODO: fetch tag subjects -- thunk action
  // tags = posts.tagIds.map(tagId => )

  let settingsVisble = false;

  const toggleSettings = () => {
    settingsVisble = true;
    document.querySelector('.post-settings').classList.toggle('hidden');
    if (settingsVisble) {
      document.addEventListener('mousedown', toggleClickEvent.bind(this), false);
    }
  };

  const toggleClickEvent = (e) => {
    if (!e.target.className.includes('post-setting')) {
      toggleSettings();
      document.removeEventListener('mousedown', toggleClickEvent.bind(this));
      settingsVisble = false;
    }
  };

  const handleDelete = (postId) => {
    document.removeEventListener('mousedown', toggleClickEvent.bind(this));
    settingsVisble = false;
    deletePost(postId);
  };
  
  return (
    <div className="post-container">
      <img id="profile-pic" src="https://via.placeholder.com/75" alt=""/>
      <div className="post">
        <div className="post-content">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <img className="post-media" src={post.media} alt=""/>
        </div>
        <button onClick={toggleSettings} className="post-settings-icon">
          <i className="fas fa-cog"></i>
        </button>

        <div className="post-settings hidden">
          <Link
            className="post-setting-link"
            to="/dashboard"
            onClick={() => handleDelete(post.id)}>Delete
          </Link>
          <Link 
            className="post-setting-link" 
            to={`edit/${post.id}`}>Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default Post;