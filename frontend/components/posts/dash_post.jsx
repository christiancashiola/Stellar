import React, { Component } from 'react';
import { linkify, getMedia } from '../../util/parse_util';
import PostFeatures from './misc/post_features';

class DashPost extends Component {

  constructor(props) {
    super(props);
    this.state = { user: null };
  }
  
  componentDidMount() {
    this.props.fetchUser(this.props.post.user_id)
    .then(user => this.setState({ user: user.user }));
  }

  componentDidUpdate() {
    if (!this.props.currentUser.follow_ids) {
      this.props.fetchUser(this.props.currentUserId);
    }
  }
  
  render() {
    const { 
      post,
      openModal,
      currentUserId,
      currentUser,
      like, 
      unlike,
      follow,
      unfollow } = this.props;

    const media = getMedia(post);
    let link;
    if (post.title && post.title.slice(0, 6) === '!link!') {
      link = linkify(post.title.slice(6));
    }
    
    const tags = post.tags.map(tag => {
       return <li key={tag.id} className="post-tag">{tag.subject}</li>
    });
    
    let img = <div style={{ width: '75px' }}></div>;
    if (this.state.user && this.state.user.profile_pic) {
      img = (
        <img className="post-profile-pic" 
        src={this.state.user.profile_pic}
        alt="profile photo"/>
      );
    }

    let followBtn;
    const postUserId = post.user_id;    
    if (currentUserId === postUserId) {
      followBtn = null;
    } else if (currentUser.follow_ids && currentUser.follow_ids.includes(postUserId)) {
      followBtn = (
        <button 
          onClick={() => unfollow(postUserId)}
          className="plus-minus">
          <i className="fas fa-minus"></i>
        </button>);
    } else {
      followBtn = (
        <button 
          onClick={() => follow(postUserId)}
          className="plus-minus">
          <i className="fas fa-plus"></i>
        </button>);
    }
  // TODO: Make tags links that go to: search/:tag
    return (
      <div className="post-container">
        {img}
        <div className="dash-post">
          <div className="post-user-info">
          <span className="post-username">{post.username}</span>
          {followBtn}
          </div>
          <figure className="post-media-wrapper">
            {media}
          </figure>
          <div className="post-content">
            {link ? link : <h3>{post.title}</h3>}
            <p>{post.body}</p>
          </div>

          <div className="post-features">
            <ul className="post-tags">{tags}</ul>
            <div className="settings-likes-comments-wrapper">
              <PostFeatures post={post} currentUserId={currentUserId}
                openModal={openModal} like={like} unlike={unlike}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashPost;