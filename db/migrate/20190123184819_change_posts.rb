class ChangePosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :title, :string, null: false
  end
end
