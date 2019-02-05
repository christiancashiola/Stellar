import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
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
  let post;
  if (ownProps.post) {
    post = {...ownProps.post};
    post.tags = post.tags.map(tag => tag.subject)
  } else {
    post = defaultPost;
  }

  return {
    username, 
    post, 
    postErrors: errors.post
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: post => dispatch(createPost(post)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaForm);