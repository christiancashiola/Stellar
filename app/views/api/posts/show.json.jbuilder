json.set! @post.id do 
  json.extract! @post, :id, :user_id, :body, :title
  json.media url_for(@post.media)
end
