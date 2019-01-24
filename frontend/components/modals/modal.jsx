import React from 'react';
import DeletePost from '../posts/delete_post';
import PostMedium from '../posts/post_medium';

const Modal = ({modal, info, closeModal}) => {
  if (!modal) {
    return null;
  }

  let component = null;
  let clickAction;

  switch (modal) {
    case 'post settings':
      clickAction = () => {
        document.querySelector('.post-settings').classList.add('hidden');
        closeModal();
      };
      component = <DeletePost postId={info} />
      break;
    case 'create post':
      component = <PostMedium />;
      clickAction = () => closeModal();
      break;
    default:
      return null;
  }

  return (
    <div className="modal" onClick={clickAction}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

export default Modal;