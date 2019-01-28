class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      errors = parse_errors(@user.errors.full_messages.join)
      render json: errors.to_json, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :profile_pic)
  end

  def parse_errors(errors)
    case
    when errors.length > 100
      "You do have to fill this stuff out, you know."
    when /pass/i =~ errors
      "The password must be at least 8 characters."
    when /email/i =~ errors
      "That's not a valid email address. Please try again."
    else
      "Your email or password were incorrect."
    end
  end
end
