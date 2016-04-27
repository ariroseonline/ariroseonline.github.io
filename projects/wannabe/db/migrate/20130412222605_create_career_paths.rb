class CreateCareerPaths < ActiveRecord::Migration
  def change
    create_table :career_paths do |t|

      t.timestamps
    end
  end
end
