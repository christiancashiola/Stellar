import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/post_actions';
import DashPosts from './dash_posts';

const mapStateToProps = ({ posts }) => ({
  // TODO: fetch friends' posts
  posts: Object.values(posts) || [],
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: criterion => dispatch(fetchPosts(criterion)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashPosts);