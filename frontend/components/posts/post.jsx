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
      document.addEventListener('mousedown', addClickEvent.bind(this));
    }
  };

  const addClickEvent = (e) => {
    if (!e.target.className.includes('post-setting')) {
      toggleSettings();
      removeEventListener('mousedown', addClickEvent.bind(this));
      settingsVisble = false;
    }
  };

  return (
    <div className="post-container">
      <img id="profile-pic" src="https://via.placeholder.com/75" alt=""/>
      <div className="post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={toggleSettings} className="post-settings-icon">
          <i className="fas fa-cog"></i>
        </button>

        <div className="post-settings hidden">
          <Link
            className="post-setting-link"
            to="/dashboard"
            onClick={() => deletePost(post.id)}>Delete
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