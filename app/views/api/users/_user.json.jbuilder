json.extract! user, :id, :username, :email
json.modernColors user.modern_colors
json.profile_pic url_for(user.profile_pic) if user.profile_pic.attached?
json.follow_ids user.followees.map(&:id)
json.admin user.admin