import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePost } from '../../actions/post_actions';
import { openModal } from '../../actions/ui_actions';
import { linkify } from '../../util/parse_util';

const mapStateToProps = ({ entities: { users }}) => ({
  users,
});

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  openModal: (modal, info) => dispatch(openModal(modal, info)),
});

const Post = ({ post, openModal }) => {

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

  let link;
  if (post.title && post.title.slice(0, 6) === '!link!') {
    link = linkify(post.title.slice(6));
  }
  
  const tags = post.tags.map(tag => {
     return <li key={tag.id} className="post-tag">{tag.subject}</li>
  });
  
  // TODO: Make tags links that go to: search/:tag
  return (
    <div className="post-container">
      <img className="post-profile-pic" src="https://via.placeholder.com/75" alt=""/>
      <div className="post">
        <span className="post-username">{post.username}</span>
        <figure className="post-media-wrapper">
          {media}
        </figure>
        <div className="post-content">
          {link ? link : <h3>{post.title}</h3>}
          <p>{post.body}</p>
        </div>

        <div className="tags-settings">
          <ul className="post-tags">{tags}</ul>
          <button 
            onClick={() => openModal('post settings', post)} 
            className="post-settings-icon">
            <i className="fas fa-cog"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);