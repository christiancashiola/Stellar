import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = ({ entities }) => ({
  // TODO: fetch friends' posts
  posts: Object.values(entities.posts) || [],
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: criterion => dispatch(fetchPosts(criterion)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostIndex)
);