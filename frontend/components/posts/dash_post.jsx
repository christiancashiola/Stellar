import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../../actions/post_actions';
import { openModal } from '../../actions/ui_actions';
import { linkify, getMedia } from '../../util/parse_util';
import { createLike, removeLike } from '../../actions/like_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
  users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  openModal: (modal, info) => dispatch(openModal(modal, info)),
  like: postId => dispatch(createLike(postId)),
  unlike: postId => dispatch(removeLike(postId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
});

class DashPost extends Component {

  constructor(props) {
    super(props);
    this.state = { user: null };
  }
  
  componentDidMount() {
    this.props.fetchUser(this.props.post.user_id)
    .then(user => this.setState({ user: user.user }));
  }
  
  render() {
    const { post, openModal, currentUserId, like, unlike } = this.props;

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
        className="post-feature-icon">
        <i className="fas fa-cog"></i>
      </button>
    );
  
    let likeAction, likeStyle, color;
    const currentUsersLike = post.likes.map(like => {
      if (like.user_id === currentUserId) {
        return like;
      }
    })[0];
  
    if (currentUsersLike) {
      likeAction = () => unlike(currentUsersLike.id);
      likeStyle = "fas fa-heart";
      color = 'red-heart';
    } else {
      likeStyle = "far fa-heart";
      likeAction = () => like(post.id);
    }
    
    const likeBtn = (
      <button 
        onClick={likeAction} 
        className={`post-feature-icon ${color}`}>
        <i className={likeStyle}></i>
      </button>
    );
    
    let img = <div style={{ width: '75px' }}></div>;
    if (this.state.user && this.state.user.profile_pic) {
      img = <img className="post-profile-pic" src={this.state.user.profile_pic} alt="profile photo"/>
    }
  // TODO: Make tags links that go to: search/:tag
    return (
      <div className="post-container">
        {img}
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
            <div className="settings-likes-comments-wrapper">
              { currentUserId === post.user_id ? postSettings : null }
              { currentUserId === post.user_id ? null : likeBtn }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashPost);