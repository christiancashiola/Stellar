class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Your email or password were incorrect'],
             status: 401
    end
  end

  def destroy
    logout_current_user
    render 'api/users/show'
  end
end
