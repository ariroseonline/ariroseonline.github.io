class TasksController < InheritedResources::Base

	def new
		@task = Task.new
	end

	def create
		@task = Task.new(secure_params)
		if @task.valid?
			@task.update_spreadsheet
			# TODO save data
			# TODO send message
			UserMailer.task_email(@task).deliver
			flash[:notice] = "Message sent from #{@task.name}." 
			redirect_to root_path
		else
			render :new
		end 
	end

	private
	
	def secure_params
		params.require(:task).permit(:name, :email, :content)
	end

end
