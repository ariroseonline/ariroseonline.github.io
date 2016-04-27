class AddClienttoMessage < ActiveRecord::Migration
  def change
  	add_column :messages, :client, :string
  end
end
