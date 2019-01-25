# TODO: extract likes, and follows
@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :user_id, :body, :title
    json.username post.user.username
    json.media url_for(post.media) if post.media.attached?
  end
end
