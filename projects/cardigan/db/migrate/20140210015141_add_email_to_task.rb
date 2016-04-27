class AddEmailToTask < ActiveRecord::Migration
  def change
    add_column :tasks, :name, :string
    add_column :tasks, :email, :string
    add_column :tasks, :content, :string
  end
end
