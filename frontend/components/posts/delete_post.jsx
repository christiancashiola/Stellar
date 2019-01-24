import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/ui_actions';

export const DeletePost = ({ postId, closeModal, deletePost }) => {

  const handleDelete = () => {
    closeModal();
    deletePost(postId);
  };

  return (
    <div className="delete-post-confirmation">
      <h3>Are you sure you wish to remove this post?</h3>

      <div className="btn-wrapper">
        <button 
          onClick={handleDelete}
          className="yes-delete">
          Definitely</button>
        <button
          onClick={closeModal}
          className="no-delete">
          Changed my mind</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deletePost: postId => dispatch(deletePost(postId)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mapDispatchToProps)(DeletePost);