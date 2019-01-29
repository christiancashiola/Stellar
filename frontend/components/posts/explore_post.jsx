import React, { Component } from 'react';
import { connect } from 'react-redux';
import { linkify, getMedia } from '../../util/parse_util';
import { updatePost } from '../../actions/post_actions';
import { openModal } from '../../actions/ui_actions';
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

class ExplorePost extends Component {

  constructor(props) {
    super(props);
    this.state = { user: null };
  }
  
  componentDidMount() {
    this.props.fetchUser(this.props.post.user_id)
    .then(user => this.setState({ user: user.user }));
  }
  // TODO: Make tags links that go to: search/:tag
  render() {
    const { post } = this.props;
    const media = getMedia(post);
    
    let link;
    if (post.title && post.title.slice(0, 6) === '!link!') {
      link = linkify(post.title.slice(6));
    }
    
    const tags = post.tags.map(tag => {
       return <li key={tag.id} className="post-tag">{tag.subject}</li>
    });

    let img = null;
    if (this.state.user && this.state.user.profile_pic) {
      img = (
        <img className="explore-profile-pic post-profile-pic" 
        src={this.state.user.profile_pic} 
        alt="profile photo"/>
      );
    }

    return (
      <div className="explore-post">
        {img}
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
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePost);