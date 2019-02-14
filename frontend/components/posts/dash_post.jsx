import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { linkify, getMedia } from '../../util/parse_util';
import PostFeatures from './misc/post_features';

class DashPost extends Component {

  constructor(props) {
    super(props);
    this.state = { user: null };
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  componentDidMount() {
    const postUserId = this.props.post.user_id;
    const users = this.props.users;
    if (!users[postUserId]) {
      this.props.fetchUser(postUserId)
      .then(user => this.setState({ user: user.user }));
    } else {
      this.setState({ user: users[postUserId] });
    }
  }

  handleTagClick(subject) {
    this.props.history.push(`/search/${subject.slice(1)}`)
  }
  
  render() {
    const { post, openModal, currentUserId, currentUser } = this.props;
    const { like,  unlike, follow, unfollow } = this.props;

    const media = getMedia(post);
    let link;
    if (post.title && post.title.slice(0, 6) === '!link!') {
      link = linkify(post.title.slice(6));
    }
    
    const tags = post.tags.map(tag => {
       return (
       <li 
        key={tag.id} 
        className="post-tag" 
        onClick={() => this.handleTagClick(tag.subject)}>
        {tag.subject}
       </li>
       )
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

export default withRouter(DashPost);