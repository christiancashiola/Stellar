class Api::PostsController < ApplicationController
  
  def index
    criterion = params[:criterion]

    # Production
    @posts = Post.order(:created_at).page(params[:page]).per(30)

    # Development
      # @posts = Post.all.page(params[:page]).per(5)

      
    # if criterion == 'dashboard'
    #   # TODO: query all followed users and
    #   # display their most recent posts
    #   @posts = Post.all
    # elsif criterion == 'trending'
    #   @posts = Post.all
    # else
    #   tag_id = Tag.find_by(subject: criterion).id      
    #   @posts = Post.where(tag_id: criterion)
    # end
      
    render 'api/posts/index'
  end

  def show
    @post = Post.find(params[:id])
    render 'api/posts/show'
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if params[:post][:tags]
      tags = ready_tags(params[:post][:tags])
      @post.tags = tags
    end

    if @post.save
      render 'api/posts/show'
    else
        render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    
    if @post.user_id == current_user.id && @post.update(post_params)
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
    params.require(:post).permit(:body, :title, :media)
  end
end
