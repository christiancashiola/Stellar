import { connect } from 'react-redux';
import { updatePost } from '../../actions/post_actions';
import { openModal } from '../../actions/ui_actions';
import { createLike, removeLike } from '../../actions/like_actions';
import { fetchUser } from '../../actions/user_actions';
import { follow, unfollow } from '../../actions/follow_actions';
import SearchExplorePost from './search_explore_post';

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.currentUserId,
  admin: state.session.admin,
  currentUser: state.entities.users[state.session.currentUserId],
  users: state.entities.users,
  post: ownProps.post,
});

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  openModal: (modal, info) => dispatch(openModal(modal, info)),
  like: postId => dispatch(createLike(postId)),
  unlike: postId => dispatch(removeLike(postId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  follow: userId => dispatch(follow(userId)),
  unfollow: userId => dispatch(unfollow(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchExplorePost);