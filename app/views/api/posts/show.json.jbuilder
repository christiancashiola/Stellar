@posts.each do |post|
  json.set! post.id do 
  # TODO: extract likes, and follows
    json.extract! post, :id, :user_id, :body
  end
end
