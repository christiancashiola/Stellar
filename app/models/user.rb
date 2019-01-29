require 'uri'

class User < ApplicationRecord

  validates_presence_of :username, :email, :session_token, :password_digest
  validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
  validates_length_of :password, in: 8..40, allow_nil: true

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :followee_follows,
    foreign_key: :user_id,
    class_name: :Follow,
    dependent: :destroy

  has_many :followees,
    through: :followee_follows,
    source: :followed_user

  has_many :follower_follows,
    foreign_key: :followed_user_id,
    class_name: :Follow
    
  has_many :followers,
    through: :follower_follows,
    source: :user

  has_many :posts,
    dependent: :destroy

  has_many :likes,
    dependent: :destroy

  has_many :liked_posts,
    through: :likes,
    source: :post

  has_one_attached :profile_pic
  
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
