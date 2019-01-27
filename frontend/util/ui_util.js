export const setFocus = () => {
  document.querySelector('.search-bar').classList.add('focus');
  document.querySelector('.search-label').classList.add('focus');

};

export const unsetFocus = () => {
  document.querySelector('.search-bar').classList.remove('focus');
  document.querySelector('.search-label').classList.remove('focus');
};