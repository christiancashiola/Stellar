class Api::LikesController < ApplicationController

  def create
    like = Like.new
    like.user_id = current_user.id
    @post = Post.find(params[:post_id])
    like.post_id = @post.id
    
    if like.save
      render 'api/posts/show'
    else
      render json: like.errors.full_messages
    end
  end

  def destroy
    like = Like.where(user_id: current_user.id).find(params[:id])
    if like
      like.destroy!
      @post = Post.find(like.post_id)
      render 'api/posts/show'
    else
      render json: ['Oops. Something went wrong'], status: 422
    end
  end
end