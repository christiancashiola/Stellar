import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { 
  fetchPosts,
  deletePost, 
  updatePost 
} from '../../actions/post_actions';
import PostIndex from './post_index';
import { openModal } from '../../actions/ui_actions';

const mapStateToProps = ({ entities }) => ({
  // TODO: fetch friends' posts
  posts: Object.values(entities.posts) || [],
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: criterion => dispatch(fetchPosts(criterion)),
  deletePost: id => dispatch(deletePost(id)),
  updatePost: post => dispatch(updatePost(post)),
  openModal: (modal, info) => dispatch(openModal(modal, info)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostIndex)
);