import { connect } from 'react-redux';
import { updatePost, clearPosts, fetchPosts } from '../../actions/post_actions';
import { openModal } from '../../actions/ui_actions';
import { createLike, removeLike } from '../../actions/like_actions';
import { fetchUser } from '../../actions/user_actions';
import { follow, unfollow } from '../../actions/follow_actions';
import DashPost from './dash_post';

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.currentUserId,
  admin: state.session.admin,
  currentUser: state.entities.users[state.session.currentUserId],
  users: state.entities.users,
  post: ownProps.post,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updatePost: post => dispatch(updatePost(post)),
  openModal: (modal, info) => dispatch(openModal(modal, info)),
  like: postId => dispatch(createLike(postId)),
  unlike: postId => dispatch(removeLike(postId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  follow: userId => dispatch(follow(userId)),
  unfollow: userId => dispatch(unfollow(userId))
    .then(() => dispatch(clearPosts()))
    .then(() => ownProps.getPosts(0)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashPost);