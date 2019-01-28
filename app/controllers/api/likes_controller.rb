class LikesController < ApplicationController

  def create
    like = Like.new(like_params)
    like.user_id = current_user.id

    if like.save
      render json: like.to_json
    else
      render json: like.errors.full_messages
    end
  end

  private

  def like_params
    params.require(:like).permit(:post_id)
  end
end