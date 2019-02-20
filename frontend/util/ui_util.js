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
  if (typeof modernColors === 'boolean') {
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

export const removeDisabled = () => {
  const buttons = document.querySelectorAll('.sm-circle');
  debugger
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  }

export const updateAnimations = (page) => {
  const content1 = document.querySelector('.mid-content');
  const content2 = document.querySelector('.splash-content-container');
  const content3 = document.querySelector('.splash-post-container');
  const content4 = document.querySelector('.splash-medium-container');
  switch (page) {
    case 0:
      content1.style.display = 'flex'
      content2.style.display = 'none';
      content3.style.display = 'none';
      content4.style.display = 'none';
      break;
    case 1:
      content1.style.display = 'none'
      content2.style.display = 'flex';
      content3.style.display = 'none';
      content4.style.display = 'none';
      break;
    case 2:
      content1.style.display = 'none'
      content2.style.display = 'none';
      content3.style.display = 'block';
      content4.style.display = 'none';
      break;
    case 3:
      content1.style.display = 'none'
      content2.style.display = 'none';
      content3.style.display = 'none';
      content4.style.display = 'flex';
      break;
    case 4:
      content1.style.display = 'none'
      content2.style.display = 'none';
      content3.style.display = 'none';
      content4.style.display = 'none';
      break;
  }
}