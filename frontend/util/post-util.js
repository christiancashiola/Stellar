export const fetchPosts = criterion => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${criterion}`,
  })
);

export const fetchPost = id => (
  $.ajax({
    method: 'GET',
    url: `api/post/${id}`,
  })
);

export const createPost = post => {
  const request = {
    method: 'POST',
    url: 'api/posts',
    data: post,
    contentType: false,
    processData: false,
  };
  
  if (post.post) {
    delete request.contentType;
    delete request.processData;
  }
  
  return $.ajax(request);
};

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