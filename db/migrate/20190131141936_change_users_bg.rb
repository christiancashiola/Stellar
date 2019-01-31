class ChangeUsersBg < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :modern_colors, :boolean, null: false, default: false
  end
end
