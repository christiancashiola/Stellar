import { connect } from 'react-redux';
import TextForm from './text_form';
import { updatePost, deletePost } from '../../../actions/post_actions';

const mapDispatchToProps = dispatch => ({
  processForm: post => dispatch(updatePost(post)),
});

export default connect(null, mapDispatchToProps)(TextForm);