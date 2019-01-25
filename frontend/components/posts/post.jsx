import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePost, deletePost } from '../../actions/post_actions';
import { openModal } from '../../actions/ui_actions';

const mapStateToProps = ({ entities: { users }}) => ({
  users,
});

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id)),
  updatePost: post => dispatch(updatePost(post)),
  openModal: (modal, info) => dispatch(openModal(modal, info)),
});

const Post = ({ post, openModal }) => {
  // TODO: do you need deletePost??

  let media = null;
  switch (post.media_type) {
    case 'image':
      media = <img className="post-media" src={post.media} alt="media"/>
      break;
    case 'video':
      media = (
        <video className="post-media" controls width="500">
          <source src={post.media} type="video/mp4"/>
        </video>
        );
        break;
    case 'audio':
      media = <audio  controls src={post.media}></audio>
  }

  return (
    <div className="post-container">
      <img id="profile-pic" src="https://via.placeholder.com/75" alt=""/>
      <div className="post">
        <span className="post-username">{post.username}</span>
        <figure className="post-media-wrapper">
          {media}
        </figure>
        <div className="post-content">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post);