class RenameJobsTable < ActiveRecord::Migration
  def up
  	rename_table :job_creations, :job_profiles
  end
  def down
  	rename_table :job_profiles, :job_creations
  end
end
