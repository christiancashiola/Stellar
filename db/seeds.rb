User.destroy_all
Post.destroy_all
Tag.destroy_all

b1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci lorem, dapibus at nulla ac, accumsan fermentum velit. Cras dignissim sapien nisi, quis pharetra turpis scelerisque vel. Curabitur libero sem, euismod at neque a, condimentum consequat elit. Ut neque lectus, tempus ut massa vitae, consectetur sollicitudin arcu. Nullam at ex id felis interdum sagittis vitae vitae nibh. Nam quis tellus eget arcu bibendum bibendum non a eros. Praesent sit amet finibus elit, in luctus leo. Sed congue erat sed justo sollicitudin, at commodo tellus volutpat. Nunc leo ex, lobortis id ultrices ut, rutrum vel arcu. Etiam dignissim dui ut turpis."
b2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue lectus. Ut malesuada tempor metus vel elementum. Sed nec convallis velit. Aliquam consequat laoreet urna. Ut ut erat pretium, facilisis neque ac, vehicula leo. Curabitur accumsan finibus pharetra. Ut ultrices dui vel dapibus fermentum. Nulla elementum porta maximus. Pellentesque."
b3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, arcu id finibus feugiat, ex turpis molestie nibh, at finibus mi erat et tellus. Curabitur."

u1 = User.create!({ email: 'demo@demo.com', password: '12345678', username: 'demo_user19' })
Post.create!({ title: 'Test Post1', body: b1, user_id: u1.id })
Post.create!({ title: 'Test Post2', body: b2, user_id: u1.id })
Post.create!({ title: 'Test Post3', body: b3, user_id: u1.id })
Post.create!({ title: 'Test Post4', body: b1, user_id: u1.id })
Post.create!({ title: 'Test Post5', body: b2, user_id: u1.id })
Post.create!({ title: 'Test Post6', body: b3, user_id: u1.id })
Post.create!({ title: 'Test Post7', body: b1, user_id: u1.id })
Post.create!({ title: 'Test Post8', body: b2, user_id: u1.id })
Post.create!({ title: 'Test Post9', body: b3, user_id: u1.id })
Post.create!({ title: 'Test Post10', body: b1, user_id: u1.id })
Post.create!({ title: 'Test Post11', body: b2, user_id: u1.id })
Post.create!({ title: 'Test Post12', body: b3, user_id: u1.id })
Post.create!({ title: 'Test Post13', body: b1, user_id: u1.id })
Post.create!({ title: 'Test Post14', body: b2, user_id: u1.id })
Post.create!({ title: 'Test Post15', body: b3, user_id: u1.id })
Post.create!({ title: 'Test Post16', body: b1, user_id: u1.id })
Post.create!({ title: 'Test Post17', body: b2, user_id: u1.id })
Post.create!({ title: 'Test Post18', body: b3, user_id: u1.id })
