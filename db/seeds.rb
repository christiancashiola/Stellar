Comment.destroy_all
User.destroy_all
Post.destroy_all
Tag.destroy_all
Like.destroy_all

# USERS
ud = User.create!({ email: 'demo@demo.com', password: '12345678', username: 'demo_user19' })
admin = User.create!({ email: 'admin@demo.com', password: '12345678', username: 'admin', admin: true })
u1 = User.create!({ email: 'user1@demo.com', password: '12345678', username: 'itsK' })
u2 = User.create!({ email: 'user2@demo.com', password: '12345678', username: 'feltfanatic' })
u3 = User.create!({ email: 'user3@demo.com', password: '12345678', username: 'ZRobot' })
u4 = User.create!({ email: 'user4@demo.com', password: '12345678', username: 'hauntedHeather' })
u5 = User.create!({ email: 'user5@demo.com', password: '12345678', username: 'AnnaMay4life' })
u6 = User.create!({ email: 'user6@demo.com', password: '12345678', username: 'bestie' })
u7 = User.create!({ email: 'user7@demo.com', password: '12345678', username: 'youAlreadyKnow' })
u8 = User.create!({ email: 'user8@demo.com', password: '12345678', username: 'zim77' })
u9 = User.create!({ email: 'user9@demo.com', password: '12345678', username: 'worthy1' })
u10 = User.create!({ email: 'user10@demo.com', password: '12345678', username: 'yoyoWizard' })

# USER PROFILE PICS
u1.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user1.jpg'), filename: 'seed.jpg')
u2.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user2.jpg'), filename: 'seed.jpg')
u3.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user3.jpg'), filename: 'seed.jpg')
u4.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user4.jpg'), filename: 'seed.jpg')
u5.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user5.jpg'), filename: 'seed.jpg')
u6.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user6.jpg'), filename: 'seed.jpg')
u7.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user7.jpg'), filename: 'seed.jpg')
u8.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user8.jpg'), filename: 'seed.jpg')
u9.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user9.jpg'), filename: 'seed.jpg')
u10.profile_pic.attach(io: EzDownload.open('https://s3.amazonaws.com/stellar-dev/user10.jpg'), filename: 'seed.jpg')
users = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10]

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

# TEXT
b1 = "Kale chips try-hard forage whatever YOLO venmo brooklyn adaptogen roof party tilde heirloom XOXO farm-to-table umami sriracha. Salvia 90's hexagon viral, affogato prism chambray. Edison bulb succulents celiac ennui green juice. Church-key craft beer offal af, cornhole kickstarter cray microdosing retro chicharrones farm-to-table taxidermy. Seitan gastropub sriracha ethical pok pok PBR&B meditation street art air plant godard cold-pressed sartorial."
b2 = "Heirloom umami viral, vinyl shaman activated charcoal jianbing +1 asymmetrical migas gentrify pour-over XOXO. Ramps fam chillwave tousled, hammock vinyl tumblr distillery unicorn hoodie fixie farm-to-table sartorial whatever williamsburg."
b3 = "Shoreditch taiyaki tumblr authentic, kogi chambray hashtag jianbing VHS direct trade gluten-free 3 wolf moon seitan. Blog subway tile everyday carry hammock. Whatever actually live-edge vegan keffiyeh green juice farm-to-table health goth brooklyn disrupt chicharrones. 3 wolf moon thundercats williamsburg franzen. Flexitarian whatever actually, selfies ethical helvetica meggings fanny pack XOXO gentrify cred jianbing occupy stumptown pok pok. Pinterest activated charcoal 3 wolf moon 8-bit adaptogen."
text = [b1, b2, b3]

# POSTS 
j = 0
50.times do |i| 
  j = 0 if j > 2
  Post.create({ title: "test", body: text[j], tag_ids: [t6.id, t7.id], user_id: users[i % 10].id })
  j += 1
end