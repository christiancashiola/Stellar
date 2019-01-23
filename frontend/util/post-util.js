export const fetchPosts = (criterion) => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${criterion}`,
  })
);
