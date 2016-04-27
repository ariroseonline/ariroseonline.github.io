class JobProfilesController < ApplicationController


	def index
		@job_profiles = JobProfile.all
	end

	def show
		@job_profile = JobProfile.find(params[:id])
	end

	def new
		@job_profile = JobProfile.new
	end

	def create
		@job_profile = JobProfile.new(params[:job_profile])
		if @job_profile.save
			redirect_to job_profile_path(@job_profile)
		else
			redirect_to new_job_profile_path
		end
	end
	
	def edit
		@job_profile = JobProfile.find(params[:id])
	end

	def update
		@job_profile = JobProfile.find(params[:id])
		if @job_profile.update_attributes(params[:job_profile])
			redirect_to job_profile_path(@job_profile)
		else
			redirect_to edit_job_profile_path
		end
	end


end
