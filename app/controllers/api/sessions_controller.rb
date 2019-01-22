class Api::SessionsController < ApplicationController

  def create
    email = params[:user][:email]
    password = params[:user][:password]
    @user = User.find_by_credentials(email, password)

    if @user
      login(@user)
      render 'api/users/show'
    else
      errors = parse_errors(email, password)
      render json: errors.to_json, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout_current_user
      render "api/users/show"
    else
      render json: ["No one is logged in"], status: 404
    end
  end

  private

  def parse_errors(email, password)
    case
    when email.empty? && password.empty?
      "You do have to fill this stuff out, you know."
    when email.empty?
      "That's not a valid email address. Please try again."
    else
      "Your email or password were incorrect."
    end
  end
end
