class ChangePostsNull < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :body, :text
    change_column :posts, :title, :string
  end
end
