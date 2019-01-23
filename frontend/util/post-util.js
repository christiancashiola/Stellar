export const fetchPosts = (criterion) => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${criterion}`,
  })
);

export const createPost = post => (
  $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: {post},
  })
);

export const updatePost = post => (
  $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: {post},
  })
);

export const deletePost = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
  })
);