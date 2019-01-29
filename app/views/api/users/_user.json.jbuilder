json.extract! user, :id, :username, :email
json.profile_pic url_for(user.profile_pic) if user.profile_pic.attached?
json.follow_ids user.followees.map(&:id)