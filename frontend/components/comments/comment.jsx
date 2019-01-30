import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ entities: { users } }, ownProps) => ({
  user: users[ownProps.comment.userId]
});

class Comment extends Component {
  render() {
    const { user, comment } = this.props;
    
    let img = <div style={{ width: '30px' }}></div>;
      if (user && user.profile_pic) {
        img = (
          <img className="explore-profile-pic post-profile-pic" 
          src={user.profile_pic} 
          alt="profile photo"/>
        );
      }

      return (
      <article className="comment-wrapper">
        {img}

        <div className="comment-body">
          <span className="comment-username">{user ? user.username : null}</span>
          {comment.body}
        </div>
      </article>
    )
  }
}

export default connect(mapStateToProps)(Comment);