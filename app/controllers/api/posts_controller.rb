class Api::PostsController < ApplicationController
  
  def index
    criterion = Tag.find_by(subject: request.url.split('/')[-1]).id
    
    if params.include?(:dashboard)
      # TODO: query all followed users and
      # display their most recent posts
    else
      
      @posts = Post.where(tag_id: criterion)
      render 'api/posts/show'
    end
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id]).where(user_id: current_user.id)
    
    if @post && @post.update(post_params)
      render 'api/posts/show'
    else
      errors = @post.errors.full_messages if @post.errors
      errors ||= ['Only authors can edit their posts']
      render json: errors, status: 401
    end
  end

  def destroy
    @post = Post.find(params[:id]).where(user_id: current_user.id)
    if @post
      @post.destroy!
      render 'api/posts/show'
    else
      render json: ['You cannot delete this post'], status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :tag_id)
  end
end
