import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchPosts, clearPosts } from "../../actions/post_actions";
import PostIndex from "./post_index";

const mapStateToProps = state => ({
  posts: Object.values(state.entities.posts).reverse() || [],
  loading: state.ui.loaders.postsLoading,
  postErrors: state.errors.post
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: (pathname, id) => dispatch(fetchPosts(pathname, id)),
  clearPosts: () => dispatch(clearPosts())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostIndex)
);
