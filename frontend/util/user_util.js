export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`,
  })
);

export const updateUser = (userId, profile_pic) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}`,
    data: profile_pic,
    contentType: false,
    processData: false,
  })
);

export const fetchRecommendedUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users',
  })
);