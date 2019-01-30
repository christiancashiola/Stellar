Comment.destroy_all
User.destroy_all
Post.destroy_all
Tag.destroy_all
Like.destroy_all

# b1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci lorem, dapibus at nulla ac, accumsan fermentum velit. Cras dignissim sapien nisi, quis pharetra turpis scelerisque vel. Curabitur libero sem, euismod at neque a, condimentum consequat elit. Ut neque lectus, tempus ut massa vitae, consectetur sollicitudin arcu. Nullam at ex id felis interdum sagittis vitae vitae nibh. Nam quis tellus eget arcu bibendum bibendum non a eros. Praesent sit amet finibus elit, in luctus leo. Sed congue erat sed justo sollicitudin, at commodo tellus volutpat. Nunc leo ex, lobortis id ultrices ut, rutrum vel arcu. Etiam dignissim dui ut turpis."
# b2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut congue lectus. Ut malesuada tempor metus vel elementum. Sed nec convallis velit. Aliquam consequat laoreet urna. Ut ut erat pretium, facilisis neque ac, vehicula leo. Curabitur accumsan finibus pharetra. Ut ultrices dui vel dapibus fermentum. Nulla elementum porta maximus. Pellentesque."
# b3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, arcu id finibus feugiat, ex turpis molestie nibh, at finibus mi erat et tellus. Curabitur."
# bodies = [b1, b2, b3]

# TAGS
t1 = Tag.create!({subject: '#food'})
t2 = Tag.create!({subject: '#anime'})
t3 = Tag.create!({subject: '#trails'})
t4 = Tag.create!({subject: '#running'})
t5 = Tag.create!({subject: '#gaming'})
t6 = Tag.create!({subject: '#music'})
t7 = Tag.create!({subject: '#life'})
t8 = Tag.create!({subject: '#reading'})
t9 = Tag.create!({subject: '#coffee'})

# USERS
ud = User.create!({ email: 'demo@demo.com', password: '12345678', username: 'demo_user19' })
u1 = User.create!({ email: 'user1@demo.com', password: '12345678', username: 'itsK' })
u2 = User.create!({ email: 'user2@demo.com', password: '12345678', username: 'feltfanatic' })
u3 = User.create!({ email: 'user3@demo.com', password: '12345678', username: 'ZRobot' })
u4 = User.create!({ email: 'user4@demo.com', password: '12345678', username: 'hauntedHeather' })
u5 = User.create!({ email: 'user5@demo.com', password: '12345678', username: 'AnnaMay4life' })

# u1.profile_pic.attach(io: File.open('/Users/Cashiola/Desktop/stellar_seeds/user1.jpg'), filename: "user1.jpg")
# u2.profile_pic.attach(io: File.open('/Users/Cashiola/Desktop/stellar_seeds/user2.jpg'), filename: "user2.jpg")
# u3.profile_pic.attach(io: File.open('/Users/Cashiola/Desktop/stellar_seeds/user3.jpg'), filename: "user3.jpg")  
# u4.profile_pic.attach(io: File.open('/Users/Cashiola/Desktop/stellar_seeds/user4.jpg'), filename: "user4.jpg")
# u5.profile_pic.attach(io: File.open('/Users/Cashiola/Desktop/stellar_seeds/user5.jpg'), filename: "user5.jpg")

# p1 = Post.create({ user_id: u1.id, title: 'Check this out...', body: 'JK' })
# p1.tags = [t7]
# Comment.create!(body: 'lol right', post_id: p1.id, user_id: u1.id)
# Comment.create!(body: 'no way youre so lame', post_id: p1.id, user_id: u2.id)
# Comment.create!(body: 'i got promoted today!', post_id: p1.id, user_id: u3.id)
# Comment.create!(body: 'nobody cares bro', post_id: p1.id, user_id: u4.id)
# Comment.create!(body: 'dont be a jerk', post_id: p1.id, user_id: u5.id)
# Comment.create!(body: 'yall playin', post_id: p1.id, user_id: u1.id)
# Comment.create!(body: 'got that new resident evil game. its lit', post_id: p1.id, user_id: u2.id)
# Comment.create!(body: 'let me come over?', post_id: p1.id, user_id: u3.id)
# Comment.create!(body: 'ooooooooooo', post_id: p1.id, user_id: u4.id)
# Comment.create!(body: 'i wanna play too!', post_id: p1.id, user_id: u5.id)
# Comment.create!(body: 'so i have a rash..........', post_id: p1.id, user_id: u1.id)
# Comment.create!(body: 'not this again. how many times have i told you lol', post_id: p1.id, user_id: u2.id)
# Comment.create!(body: 'does anyone have any plans this weekend?', post_id: p.id, user_id: u3.id)
# Comment.create!(body: 'yeah. resident evil', post_id: p.id, user_id: u2.id)
# ud.profile_pic.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/default_profile_pic.png"), filename: "default_profile_pic.png")
# u1.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user1.jpg'), filename: "user1.jpg")
# u2.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user2.jpg'), filename: "user2.jpg")
# u3.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user3.jpg'), filename: "user3.jpg")  
# u4.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user4.jpg'), filename: "user4.jpg")
# u5.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user5.jpg'), filename: "user5.jpg")

# # POSTS

# p18 = Post.create!({ user_id: u3.id })
# p18.tags = [t4]
# p18.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/running5.jpg"), filename: "running5.jpg")
# Post.create!({ user_id: u4.id, title: 'Life is...', body: b1 })

# Post.create!({ user_id: u1.id, title: 'Life is...', body: b1 })
# p2 = Post.create!({ user_id: u2.id })
# Post.create!({ user_id: u4.id, title: 'Life is...', body: b1 })
# p2.tags = [t1]
# p2.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/food2.jpg"), filename: "food2.jpg")

# p3 = Post.create!({ user_id: u3.id })
# p3.tags = [t1]
# p3.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/food3.jpg"), filename: "food3.jpg")
# Post.create!({ user_id: u5.id, title: 'Life is...', body: b2 })

# p11 = Post.create!({ user_id: u1.id })
# p11.tags = [t9]
# p11.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/cafe3.jpg"), filename: "cafe3.jpg")
# Post.create!({ user_id: u3.id, title: 'Life is...', body: b3 })

# p25 = Post.create!({ user_id: u5.id })
# p25.tags = [t3]
# p25.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/trail2.jpg"), filename: "trail2.jpg")

# # ==================================
# p1 = Post.create!({ user_id: u1.id })
# p1.tags = [t1]
# p1.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/food1.jpg"), filename: "food1.jpg")
# Post.create!({ user_id: u5.id, title: 'Life is...', body: b2 })

# p6 = Post.create!({ user_id: u1.id })
# p6.tags = [t8]
# p6.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/books1.jpg"), filename: "books1.jpg")
# Post.create!({ user_id: u5.id, title: 'Life is...', body: b2 })

# p5 = Post.create!({ user_id: u5.id })
# p5.tags = [t2]
# p5.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/anime1.gif"), filename: "anime1.gif")
# Post.create!({ user_id: u1.id, title: 'Life is...', body: b1 })

# p7 = Post.create!({ user_id: u2.id })
# Post.create!({ user_id: u3.id, title: 'Life is...', body: b3 })
# p7.tags = [t8]
# p7.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/books2.jpg"), filename: "books2.jpg")

# p8 = Post.create!({ user_id: u3.id })
# p8.tags = [t9]
# p8.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/cafe1.jpg"), filename: "cafe1.jpg")
# Post.create!({ user_id: u3.id, title: 'Life is...', body: b3 })

# p10 = Post.create!({ user_id: u5.id })
# p10.tags = [t2]
# p10.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/anime2.gif"), filename: "anime2.gif")
# Post.create!({ user_id: u1.id, title: 'Life is...', body: b1 })

# # ==================================

# p17 = Post.create!({ user_id: u2.id })
# p17.tags = [t6]
# p17.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/music4.jpg"), filename: "music4.jpg")
# Post.create!({ user_id: u4.id, title: 'Life is...', body: b1 })

# p12 = Post.create!({ user_id: u2.id })
# p12.tags = [t9]
# p12.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/cafe4.jpg"), filename: "cafe4.jpg")
# Post.create!({ user_id: u4.id, title: 'Life is...', body: b1 })

# p4 = Post.create!({ user_id: u4.id })
# p4.tags = [t1]
# p4.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/food4.jpg"), filename: "food4.jpg")

# p13 = Post.create!({ user_id: u3.id })
# p13.tags = [t6]
# Post.create!({ user_id: u2.id, title: 'Life is...', body: b2 })
# p13.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/music1.jpg"), filename: "music1.jpg")
# Post.create!({ user_id: u3.id, title: 'Life is...', body: b3 })

# p14 = Post.create!({ user_id: u4.id })
# p14.tags = [t6]
# p14.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/music2.jpg"), filename: "music2.jpg")

# p15 = Post.create!({ user_id: u5.id })
# Post.create!({ user_id: u2.id, title: 'Life is...', body: b2 })
# p15.tags = [t5]
# p15.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/gaming1.gif"), filename: "gaming1.gif")

# # ==================================

# p16 = Post.create!({ user_id: u1.id })
# p16.tags = [t6]
# p16.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/music3.jpg"), filename: "music3.jpg")
# Post.create!({ user_id: u5.id, title: 'Life is...', body: b2 })

# p18 = Post.create!({ user_id: u3.id })
# p18.tags = [t4]
# Post.create!({ user_id: u1.id, title: 'Life is...', body: b1 })
# p18.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/running1.jpg"), filename: "running1.jpg")
# Post.create!({ user_id: u3.id, title: 'Life is...', body: b3 })

# p9 = Post.create!({ user_id: u4.id })
# p9.tags = [t9]
# p9.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/cafe2.jpg"), filename: "cafe2.jpg")
# Post.create!({ user_id: u2.id, title: 'Life is...', body: b2 })

# p19 = Post.create!({ user_id: u4.id })
# p19.tags = [t4]
# p19.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/running2.jpg"), filename: "running2.jpg")
# Post.create!({ user_id: u2.id, title: 'Life is...', body: b2 })

# p20 = Post.create!({ user_id: u5.id })
# p20.tags = [t5]
# p20.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/gaming2.gif"), filename: "gaming2.gif")
# Post.create!({ user_id: u1.id, title: 'Life is...', body: b1 })

# # ==================================

# p16 = Post.create!({ user_id: u1.id })
# p16.tags = [t4]
# p16.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/running3.jpg"), filename: "running3.jpg")
# Post.create!({ user_id: u5.id, title: 'Life is...', body: b2 })

# p17 = Post.create!({ user_id: u2.id })
# p17.tags = [t4]
# p17.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/running4.jpg"), filename: "running4.jpg")
# Post.create!({ user_id: u4.id, title: 'Life is...', body: b1 })
# Post.create!({ user_id: u5.id, title: 'Life is...', body: b2 })

# p23 = Post.create!({ user_id: u3.id })
# p23.tags = [t3]
# p23.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/trail5.jpg"), filename: "trail5.jpg")

# p19 = Post.create!({ user_id: u4.id })
# p19.tags = [t3]
# p19.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/trail1.jpg"), filename: "trail1.jpg")
# Post.create!({ user_id: u2.id, title: 'Life is...', body: b2 })

# p20 = Post.create!({ user_id: u5.id })
# p20.tags = [t3]
# p20.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/trail2.jpg"), filename: "trail2.jpg")
# Post.create!({ user_id: u1.id, title: 'Life is...', body: b1 })

# # ==================================

# p21 = Post.create!({ user_id: u1.id })
# Post.create!({ user_id: u3.id, title: 'Life is...', body: b3 })
# p21.tags = [t3]
# p21.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/trail3.jpg"), filename: "trail3.jpg")

# p22 = Post.create!({ user_id: u2.id })
# p22.tags = [t3]
# p22.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/trail4.jpg"), filename: "trail4.jpg")
# Post.create!({ user_id: u4.id, title: 'Life is...', body: b1 })

# p24 = Post.create!({ user_id: u4.id })
# p24.tags = [t3]
# p24.media.attach(io: EzDownload.open("https://s3.amazonaws.com/stellar-dev/trail1.jpg"), filename: "trail1.jpg")
# Post.create!({ user_id: u2.id, title: 'Life is...', body: b2 })

# u1.save!
# u2.save!
# u3.save!
# u4.save!
# u5.save!