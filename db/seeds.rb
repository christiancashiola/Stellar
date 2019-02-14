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