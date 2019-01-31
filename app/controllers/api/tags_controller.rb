class Api::TagsController < ApplicationController

  def index
    if params[:fragment].present?
      
      @tags = Tag.where('subject ~ ?', "##{params[:fragment]}")
    else
      @tags = Tag.none
    end
  end
  
  def create
    tag = Tag.new(tag_params)

    if tag.save
      render json: tag.to_json
    else
      render json: tag.errors.full_messages
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:subject)
  end
end