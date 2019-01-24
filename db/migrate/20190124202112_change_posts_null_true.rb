class ChangePostsNullTrue < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :body, :text, null: true
    change_column :posts, :title, :string, null: true
  end
end
