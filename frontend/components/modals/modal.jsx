import React from 'react';
import PostSettings from '../posts/misc/post_settings';
import PostMedium from '../posts/misc/post_medium';
import EditTextForm from '../posts/post_form/edit_text_form';
import MediaForm from '../posts/post_form/media_form_container';
import ProfilePic from '../profile/profile_pic';
import CommentIndex from '../comments/comment_index_container';

const Modal = ({modal, info, closeModal}) => {
  if (!modal) {
    return null;
  }
  
  let component = null;
  switch (modal) {
    case 'profile pic':
      component = <ProfilePic />
      break;
    case 'post settings':
      component = <PostSettings post={info} />
      break;
    case 'create post':
      component = <PostMedium />;
      break;
    case 'edit text':
      component = <EditTextForm post={info} />;
      break;
    case 'edit media':
      component = <MediaForm post={info} />;
      break;
    case 'comment':
      component = <CommentIndex post={info} />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

export default Modal;