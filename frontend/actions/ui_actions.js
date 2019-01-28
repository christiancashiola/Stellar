export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const START_LOADING_POSTS = 'START_LOADING_POSTS';

export const openModal = (modal, info) => {
  return {
    type: OPEN_MODAL,
    modal,
    info,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const startLoadingPosts = () => {
  return {
    type: START_LOADING_POSTS,
  };
};