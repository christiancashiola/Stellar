import React, { Component } from 'react';
import { linkify, getMedia } from '../../util/parse_util';
import PostFeatures from './misc/post_features';
import { withRouter } from 'react-router-dom';

class SearchExplorePost extends Component {

  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  handleTagClick(subject) {
    this.props.history.push(`/search/${subject.slice(1)}`)
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

  render() {
    const { 
      post,
      openModal,
      currentUserId,
      currentUser,
      like, 
      unlike,
      follow,
      admin,
      unfollow } = this.props;
    const media = getMedia(post);
    
    let link;
    if (post.title && post.title.slice(0, 6) === '!link!') {
      link = linkify(post.title.slice(6));
    }
    
    const tags = post.tags.map(tag => {
       return <li 
       key={tag.id} 
       className="post-tag"
       onClick={() => this.handleTagClick(tag.subject)}>
       {tag.subject}</li>
    });

    let img = null;
    if (this.state.user && this.state.user.profile_pic) {
      img = (
        <img className="explore-profile-pic post-profile-pic" 
        src={this.state.user.profile_pic} 
        alt="profile photo"/>
      );
    }

    let followBtn;
    const postUserId = post.user_id;
    if (currentUserId === postUserId) {
      followBtn = null;
    } else if (currentUser.follow_ids 
      && currentUser.follow_ids.includes(postUserId)) {
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
      <div className="search-explore-post">
        <div className="post-user-info">
          <div className="profile-photo-username-wrapper">
            {img}
            <span className="post-username">{post.username}</span>
          </div>
          {followBtn}
        </div>
        <figure className="post-media-wrapper">
          {media}
        </figure>
        <div className="post-content">
          {link ? link : <h3>{post.title}</h3>}
          <p>{post.body}</p>
        </div>

        <div className="tags-settings">
          <ul className="post-tags">{tags}</ul>
          <PostFeatures post={post} admin={admin} currentUserId={currentUserId}
            openModal={openModal} like={like} unlike={unlike}/>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchExplorePost);