class AddFieldstoMessage < ActiveRecord::Migration
  def change
  	add_column :messages, :phone_number, :string
  	add_column :messages, :trigger_time, :datetime
  	add_column :messages, :text, :string
  end
end
