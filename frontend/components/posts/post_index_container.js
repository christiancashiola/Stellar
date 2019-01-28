import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = state => ({
  // TODO: fetch friends' posts
  posts: Object.values(state.entities.posts) || [],
  loading: state.ui.loaders.postsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: (criterion, id) => dispatch(fetchPosts(criterion, id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostIndex)
);