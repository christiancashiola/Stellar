# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Tag.destroy_all

User.create!({ email: 'demo@demo.com', password: '12345678', username: 'demo' })
Tag.create!({ subject: 'anime' })
# Post.create!({ body: 'post 1', tag_id: Tag.find_by(subject: 'anime').id, user_id: User.find_by(username: 'demo').id })
# Post.create!({ body: 'post 2', tag_id: Tag.find_by(subject: 'anime').id, user_id: User.find_by(username: 'demo').id })
# Post.create!({ body: 'post 3', tag_id: Tag.find_by(subject: 'anime').id, user_id: User.find_by(username: 'demo').id })