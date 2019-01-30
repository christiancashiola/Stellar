export const setFocus = () => {
  document.querySelector('.search-bar').classList.add('focus');
  document.querySelector('.search-label').classList.add('focus');

};

export const unsetFocus = () => {
  document.querySelector('.search-bar').classList.remove('focus');
  document.querySelector('.search-label').classList.remove('focus');
};

export const readyComment = () => {
  document.querySelector(".comment-btn").classList.add('comment-ready');
};

export const unreadyComment = () => {
  document.querySelector(".comment-btn").classList.remove('comment-ready');
};