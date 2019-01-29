export const follow = userId => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: {user_id: userId},
  })
);

export const unfollow = userId => (
  $.ajax({
    method: 'DELETE',
    url: `api/follows/${userId}`,
  })
);