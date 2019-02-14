class Api::UsersController < ApplicationController

  def index
    @users = nil;
    if params[:user_ids]
      @users = User.where(id: [params[:user_ids]])
    else
      followee_ids = current_user.followees.pluck(:id)
      recommended_ids = User.where.not(id: current_user.id)
                .where.not(id: followee_ids) 
                .order('RANDOM()')
                .limit(5).pluck(:id)
      @users = recommended_ids.map { |id| User.find(id) }
    end

    render 'api/users/index'
  end
  
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
    params.require(:user).permit(
      :username, :email, :password, :profile_pic, :modern_colors, :admin
    )
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
