import React from 'react';
import { connect } from 'react-redux';
import { linkify, getMedia } from '../../util/parse_util';

const mapStateToProps = ({ entities: { users }}) => ({
  users,
});

const ExplorePost = ({ post, openModal }) => {

  const media = getMedia(post);
  let link;
  if (post.title && post.title.slice(0, 6) === '!link!') {
    link = linkify(post.title.slice(6));
  }
  
  const tags = post.tags.map(tag => {
     return <li key={tag.id} className="post-tag">{tag.subject}</li>
  });
  
  // TODO: Make tags links that go to: search/:tag
  return (
    <div className="explore-post">
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
  );
};

export default connect(mapStateToProps)(ExplorePost);