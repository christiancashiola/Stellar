import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import { closeModal, openModal } from '../../actions/ui_actions';

export const CommentSettings = (props) => {

  const { 
    comment, 
    closeModal,
    openModal,
    deleteComment 
  } = props;
  const handleDelete = () => {
    closeModal();
    deleteComment(comment);
  };

  const handleEdit = () => {
    openModal('edit comment', comment);
  };
  
  return (
    <div className="comment-settings">
      <h3>How do you feel about this comment?</h3>
      <button
        onClick={handleEdit}
        className="edit-comment">
        Edit it</button>
      <button 
        onClick={handleDelete}
        className="delete-comment">
        Delete it</button>
      <button
        onClick={closeModal}
        className="nevermind-comment">
        Nevermind</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteComment: comment => dispatch(deleteComment(comment)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal, info) => dispatch(openModal(modal, info)),
});

export default connect(null, mapDispatchToProps)(CommentSettings);