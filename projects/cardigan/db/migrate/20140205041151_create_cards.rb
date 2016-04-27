class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :name
      t.string :body
      t.string :image

      t.timestamps
    end
  end
end
