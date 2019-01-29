export const follow = userId => (
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: {user_id: userId},
  })
);

export const unfollow = userId => (
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: {user_id: userId},
  })
);