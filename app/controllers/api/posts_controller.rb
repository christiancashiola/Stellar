class Api::PostsController < ApplicationController
  
  def index
    criterion = request.url.split('/')[-1]
    if criterion == 'dashboard'
      # TODO: query all followed users and
      # display their most recent posts
      @posts = Post.all
    else
      tag_id = Tag.find_by(subject: criterion).id      
      @posts = Post.where(tag_id: criterion)
    end
      
    render 'api/posts/index'
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @post.tag_id = 5

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
    @post = Post.where(user_id: current_user.id).find(params[:id])
    if @post
      @post.destroy!
      render 'api/posts/show'
    else
      render json: ['You cannot delete this post'], status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:body, :title, :tag_id)
  end
end
