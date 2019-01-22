class Api::TagsController < ApplicationController

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