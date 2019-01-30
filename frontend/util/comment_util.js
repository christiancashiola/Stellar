export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment },
  })
);

export const fetchComments = postId => (
  $.ajax({
    method: 'GET',
    url: 'api/comments',
    data: { post_id: postId },
  })
);

// export const removeComment = comment => (
//   $.ajax({
//     method: 'POST',
//     url: `api/comments/${comment.id}`,
//     data: { comment },
//   })
// );
