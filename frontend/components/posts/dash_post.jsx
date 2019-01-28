import React from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../../actions/post_actions';
import { openModal } from '../../actions/ui_actions';
import { linkify, getMedia } from '../../util/parse_util';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
});

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  openModal: (modal, info) => dispatch(openModal(modal, info)),
});

const DashPost = ({ post, openModal, currentUserId }) => {

  const media = getMedia(post);
  let link;
  if (post.title && post.title.slice(0, 6) === '!link!') {
    link = linkify(post.title.slice(6));
  }
  
  const tags = post.tags.map(tag => {
     return <li key={tag.id} className="post-tag">{tag.subject}</li>
  });

  const postSettings = (
    <button 
      onClick={() => openModal('post settings', post)} 
      className="post-settings-icon">
      <i className="fas fa-cog"></i>
    </button>
  );
  
  // TODO: Make tags links that go to: search/:tag
  return (
    <div className="post-container">
      <img className="post-profile-pic" src="https://via.placeholder.com/75" alt=""/>
      <div className="dash-post">
        <span className="post-username">{post.username}</span>
        <figure className="post-media-wrapper">
          {media}
        </figure>
        <div className="post-content">
          {link ? link : <h3>{post.title}</h3>}
          <p>{post.body}</p>
        </div>

        <div className="post-features">
          <ul className="post-tags">{tags}</ul>
          { currentUserId === post.user_id ? postSettings : null }
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DashPost);