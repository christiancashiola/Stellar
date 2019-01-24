class Post < ApplicationRecord

  validates_presence_of :body, :title
  
  belongs_to :user
  belongs_to :tag

  has_one_attached :media
end
