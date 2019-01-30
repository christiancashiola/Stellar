export const createComment = (body, post_id) => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment: { body, post_id }},
  })
);

export const fetchComments = postId => (
  $.ajax({
    method: 'GET',
    url: 'api/comments',
    data: { post_id: postId },
  })
);

export const deleteComment = comment => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`,
    data: { comment },
  })
);

export const updateComment = comment => (
  $.ajax({
    method: 'PATCH',
    url: `api/comments/${comment.id}`,
    data: { comment },
  })
);
