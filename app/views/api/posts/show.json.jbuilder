json.set! @post.id do 
  json.extract! @post, :id, :user_id, :body, :title
  json.username @post.user.username
  json.media url_for(@post.media) if @post.media.attached?
  json.media_type @post.media.content_type[0, 5] if @post.media.attached?
end
