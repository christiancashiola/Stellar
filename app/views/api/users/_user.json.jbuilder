json.extract! user, :id, :username, :email
json.profile_pic url_for(user.profile_pic) if user.profile_pic.attached?