import React, { Component } from 'react';
import { fetchUser } from '../../actions/user_actions';
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
  fetchUser: userId => dispatch(fetchUser(userId)),
  openModal: (modal, info) => dispatch(openModal(modal, info)),
});

class Post extends Component {
  // TODO: do you need deletePost??
  // tags = posts.tagIds.map(tagId => )

  componentDidMount() {
    const userId = this.props.post.user_id;
    return this.props.users[userId] ||
      this.props.fetchUser(userId);
  }

  render() {
    const { post, openModal } = this.props;
    const user = this.props.users[this.props.post.user_id]

    return (
      <div className="post-container">
        <img id="profile-pic" src="https://via.placeholder.com/75" alt=""/>
        <div className="post">
          <div className="post-content">
            <span className="username">{user.username}</span>
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);