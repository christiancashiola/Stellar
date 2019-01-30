import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.comment.authorId],
  currentUserId: state.session.currentUserId,
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal, info) => dispatch(openModal(modal, info)),
});

class Comment extends Component {
  render() {
    const { user, comment, currentUserId, openModal } = this.props;
    
    let img = <div style={{ width: '30px' }}></div>;
      if (user && user.profile_pic) {
        img = (
          <img className="explore-profile-pic post-profile-pic" 
          src={user.profile_pic} 
          alt="profile photo"/>
        );
      }

      const commentSettings = (
        <button 
          onClick={() => openModal('comment settings', comment)} 
          className="comment-feature-icon">
          <i className="fas fa-cog"></i>
        </button>
      );

      return (
      <article className="comment-wrapper">
        {img}
        <div className="comment-body">
          <span className="comment-username">{user ? user.username : null}</span>
          {comment.body}
          { currentUserId === comment.authorId ? commentSettings : null }
        </div>
      </article>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);