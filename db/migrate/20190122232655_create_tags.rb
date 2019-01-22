class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :subject

      t.timestamps
    end

    add_index :tags, :subject, unique: true
  end
end
