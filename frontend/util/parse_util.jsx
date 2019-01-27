import React from 'react';

export const linkify = text => {
  switch (text.slice(0, 3)) {
    case 'htt':
      break;

    case 'www':
      text = 'https://' + text;
      break;

    default:
      text = 'https://www.' + text;
      break;
  }

  if (text.slice(text.length - 4) !== '.com') {
    text += '.com';
  }

  return <a className="link-style" href={`${text}`}>{text.slice(8)}</a>
};