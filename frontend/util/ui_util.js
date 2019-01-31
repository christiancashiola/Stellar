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

export const setColors = modernColors => {
  const body = document.querySelector('body');
  const nav = document.querySelector('nav');
  const text = document.querySelector('.text');
  const photo = document.querySelector('.photo');
  const quote = document.querySelector('.quote');
  const link = document.querySelector('.circle');
  const audio = document.querySelector('.audio');
  const video = document.querySelector('.video');
  const dashLinks = Boolean(text);
  
  // bool logic just for heroku
  if (modernColors) {
    modernColors = modernColors.toString();
  }
  
  if (nav && modernColors === 'true') { 
    body.style.backgroundColor = '#011A34';
    nav.style.backgroundColor = '#011A34';
    if (dashLinks) {
      text.style.color = '#000';
      photo.style.color = '#FC5D4C';
      quote.style.color = '#FD963B';
      link.style.backgroundColor = '#37D253';
      audio.style.color = '#8972FB';
      video.style.color = '#FD77D1';
    }
  } else if (nav && modernColors === 'false') {
    body.style.backgroundColor = '#35465C';
    nav.style.backgroundColor = '#35465C';
    if (dashLinks) {
      text.style.color = '#525252';
      photo.style.color = '#DA6A54';
      quote.style.color = '#F1A344';
      link.style.backgroundColor = '#6CC595';
      audio.style.color = '#AF86C8';
      video.style.color = '#838C94';
    }
  }
};
