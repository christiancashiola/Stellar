class Post < ApplicationRecord
  
  validates_presence_of :body
  
  belongs_to :user

  has_and_belongs_to_many :tags

  has_one_attached :media

  has_many :likes,
    dependent: :destroy

  has_many :liked_users,
    through: :likes,
    source: :user

end
