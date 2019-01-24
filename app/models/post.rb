class Post < ApplicationRecord
  
  belongs_to :user
  belongs_to :tag

  has_one_attached :media
end
