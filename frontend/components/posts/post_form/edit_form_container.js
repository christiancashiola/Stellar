import { connect } from 'react-redux';
import PostForm from './post_form';
import { updatePost, deletePost } from '../../../actions/post_actions';

const mapDispatchToProps = dispatch => ({
  processForm: post => dispatch(updatePost(post)),
});

export default connect(null, mapDispatchToProps)(PostForm);