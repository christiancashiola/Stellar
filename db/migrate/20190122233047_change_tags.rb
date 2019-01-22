class ChangeTags < ActiveRecord::Migration[5.2]
  def change
    change_column :tags, :subject, :string, null: false
  end
end
