class UserMailer < ActionMailer::Base
  default from: "do-not-reply@ari-rose.com"

  def task_email(task)
  	@task = task
  	mail(to: ENV["OWNER_EMAIL"], from: @task.email, subject: "Website Contact")
  end
end
