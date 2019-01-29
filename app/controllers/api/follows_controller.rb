class Api::FollowsController < ApplicationController

  def create
    follow = Follow.new(
      user_id: current_user.id,
      followed_user_id: params[:user_id]
    )
    @user = current_user
    if follow.save
      render 'api/users/show'
    else
      render json: follow.errors.full_messages
    end
  end

  def destroy
    follow = Follow.where(user_id: current_user.id).find_by(
      followed_user_id: params[:user_id])
    
    if follow
      follow.destroy
      @user = current_user
      render 'api/users/show'
    else
      render json: ['Oops. Something went wrong'], status: 422
    end
  end
end