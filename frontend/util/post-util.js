export const fetchPosts = (pathname, page) => (
  $.ajax({
    method: 'GET',
    url: 'api/posts/',
    data: { pathname, page },
  })
);

export const fetchPost = id => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}`,
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

export const updatePost = (post, id) => {
  const request = {
    method: 'PATCH',
    url: `/api/posts/${id}`,
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

export const deletePost = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
  })
);