class ApplicationController < ActionController::Base

  helper_method :current_user

  def current_user
    return nil unless session[:session_token]
    @current_user || User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout_current_user
    current_user.reset_session_token!
    @current_user = nil
    session[:session_token] = nil
  end

  def ready_tags(tags)
    tags = parse_tags(tags)
    ready_tags = []
    tags.each do |tag|
      existing_tag = Tag.find_by(subject: tag)
      if existing_tag 
        ready_tags << existing_tag
      else
        ready_tags << Tag.create!({ subject: tag })
      end
    end
    ready_tags
  end

  private

  def parse_tags(tags)
    tags.split.map { |tag| tag[0] == '#' ? tag : '#' + tag }
  end
end
