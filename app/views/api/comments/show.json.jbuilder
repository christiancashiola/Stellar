json.set! @comment.id do
  json.extract! @comment, :id, :body
  json.postId @comment.post_id
  json.authorId @comment.user_id
end