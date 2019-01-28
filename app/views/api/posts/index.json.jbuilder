# TODO: extract likes, and follows
@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :user_id, :body, :title, :tags
    json.likes post.likes.map { |like| { id: like.id, user_id: like.user_id }}
    json.username post.user.username
    json.media url_for(post.media) if post.media.attached?
    json.media_type post.media.content_type[0, 5] if post.media.attached?
  end
end
