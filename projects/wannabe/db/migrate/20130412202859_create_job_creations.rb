class CreateJobCreations < ActiveRecord::Migration
  def change
    create_table :job_creations do |t|
      t.integer :age
      t.integer :years_exp
      t.string :education
      t.integer :hours_per_week
      t.integer :salary
      t.text :long_description
      t.string :career
      t.string :job_title

      t.timestamps
    end
  end
end
