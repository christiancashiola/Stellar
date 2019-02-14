import { connect } from 'react-redux';
import { createPost, updatePost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/ui_actions';
import MediaForm from './media_form';

const mapStateToProps = ({ entities, session, errors }, ownProps) => {
  const currentUserID = session[Object.keys(session)[0]];
  const username = entities.users[currentUserID].username;
  const defaultPost = {
    mediaFile: null,
    fileUrl: null,
    body: '',
    tags: '',
  };
  let post, edit;
  if (ownProps.post) {
    post = {...ownProps.post};
    post.tags = post.tags.map(tag => tag.subject)
    edit = true;
  } else {
    post = defaultPost;
    edit = false;
  }
  return {
    username, 
    post, 
    postErrors: errors.post,
    edit
  };
};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  updatePost: (post, postId) => dispatch(updatePost(post, postId)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaForm);