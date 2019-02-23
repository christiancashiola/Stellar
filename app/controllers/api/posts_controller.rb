class Api::PostsController < ApplicationController
  
  def index
    pathname = params[:pathname].split('/')
    @posts = nil
    
    if pathname[1] == 'dashboard'
      @posts = Post
        .order(created_at: :desc)
        .where(user_id: current_user.followee_ids.push(current_user.id))
        .page(params[:page]).per(20)

    elsif pathname[1] == 'explore'
      @posts = Post
        .order(likes_count: :desc)
        .page(params[:page]).per(30)
        
    else
      tag = Tag.find_by(subject: "##{pathname[-1]}")
      @posts = tag.posts.order(created_at: :desc).page(params[:page]).per(30)
    end

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
    @post = nil
    if current_user.admin
      @post = Post.find(params[:id])
    else
      @post = Post.where(user_id: current_user.id).find(params[:id])
    end

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
