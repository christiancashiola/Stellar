import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../../actions/post_actions';

const mapDispatchToProps = dispatch => ({
  processForm: post => dispatch(createPost(post)),
});

export default connect(null, mapDispatchToProps)(PostForm);