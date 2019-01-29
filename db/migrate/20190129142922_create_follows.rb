class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false, index: true
      t.integer :followed_user_id, null: false, index: true

      t.timestamps
    end

    add_index :follows, [:user_id, :followed_user_id], unique: true
  end
end
