import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post, deletePost, updatePost, openModal }) => {
  // TODO: fetch tag subjects -- thunk action
  // tags = posts.tagIds.map(tagId => )
  
  return (
    <div className="post-container">
      <img id="profile-pic" src="https://via.placeholder.com/75" alt=""/>
      <div className="post">
        <div className="post-content">

          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <img className="post-media" src={post.media} alt=""/>
        </div>
        <button onClick={() => openModal('post settings', post.id)} className="post-settings-icon">
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