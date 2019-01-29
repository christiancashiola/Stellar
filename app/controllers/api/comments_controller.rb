class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(post_id: params[:post_id])

    render 'api/comments/index'
  end
  
  def show
    @comment = Comment.find(params[:id])

    if @comment
      render 'api/comments/show'
    else
      render json: ['Oops. Something went wrong'], status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :post_id)
  end
end