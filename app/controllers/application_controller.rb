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
end
