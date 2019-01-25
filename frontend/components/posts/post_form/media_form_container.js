import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/ui_actions';
import { withRouter } from 'react-router-dom';
import MediaForm from './media_form';

const mapStateToProps = ({ entities, session }, ownProps) => {
  const currentUserID = session[Object.keys(session)[0]];
  const username = entities.users[currentUserID].username;
  const defaultPost = {
    mediaFile: null,
    fileUrl: null,
    body: '',
    tag: '',
  };
  let post = ownProps.post || defaultPost;

  return { username, post };
};

const mapDispatchToProps = dispatch => ({
  processForm: post => dispatch(createPost(post)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaForm);