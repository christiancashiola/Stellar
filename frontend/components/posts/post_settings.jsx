import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post_actions';
import { closeModal, openModal } from '../../actions/ui_actions';

export const PostSettings = (props) => {

  const { 
    post, 
    closeModal,
    openModal,
    deletePost 
  } = props;
  const handleDelete = () => {
    closeModal();
    deletePost(post.id);
  };

  const handleEdit = () => {
    let postType = post.media ? 'media' : 'text';
    openModal(`edit ${postType}`, post);
  };

  return (
    <div className="delete-post-confirmation">
      <h3>How do you feel about this post?</h3>

      <div className="btn-wrapper">
        <button
          onClick={handleEdit}
          className="edit-post">
          Edit it</button>
        <button 
          onClick={handleDelete}
          className="delete-post">
          Delete it</button>
        <button
          onClick={closeModal}
          className="nevermind">
          Nevermind</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deletePost: postId => dispatch(deletePost(postId)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal, info) => dispatch(openModal(modal, info)),
});

export default connect(null, mapDispatchToProps)(PostSettings);