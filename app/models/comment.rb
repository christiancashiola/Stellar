class Comment < ApplicationRecord

  validates_presence_of :body

  belongs_to :user
  
  belongs_to :post
end
