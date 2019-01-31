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
u8 = User.create!({ email: 'user8@demo.com', password: '12845678', username: 'zim77' })
u9 = User.create!({ email: 'user9@demo.com', password: '12345678', username: 'worthy1' })
u10 = User.create!({ email: 'user10@demo.com', password: '12345678', username: 'yoyoWizard' })