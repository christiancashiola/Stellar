User.destroy_all
Post.destroy_all
Tag.destroy_all

b1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci lorem, dapibus at nulla ac, accumsan fermentum velit. Cras dignissim sapien nisi, quis pharetra turpis scelerisque vel. Curabitur libero sem, euismod at neque a, condimentum consequat elit. Ut neque lectus, tempus ut massa vitae, consectetur sollicitudin arcu. Nullam at ex id felis interdum sagittis vitae vitae nibh. Nam quis tellus eget arcu bibendum bibendum non a eros. Praesent sit amet finibus elit, in luctus leo. Sed congue erat sed justo sollicitudin, at commodo tellus volutpat. Nunc leo ex, lobortis id ultrices ut, rutrum vel arcu. Etiam dignissim dui ut turpis."
b2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue lectus. Ut malesuada tempor metus vel elementum. Sed nec convallis velit. Aliquam consequat laoreet urna. Ut ut erat pretium, facilisis neque ac, vehicula leo. Curabitur accumsan finibus pharetra. Ut ultrices dui vel dapibus fermentum. Nulla elementum porta maximus. Pellentesque."
b3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, arcu id finibus feugiat, ex turpis molestie nibh, at finibus mi erat et tellus. Curabitur."
bodies = [b1, b2, b3]

u1 = User.create!({ email: 'demo@demo.com', password: '12345678', username: 'demo_user19' })
u1.profile_pic.attach(io: File.open("/Users/Cashiola/Desktop/default_profile_pic copy.png"), filename: "default_profile_pic.png")
Post.create!({ title: 'Test Post1', body: b1, user_id: u1.id })
# 20.times do |i|
#   Post.create!({ title: "Test Post #{i + 1}", body: bodies[i % 3], user_id: u1.id })
# end


# Check posts controller pagination for dev