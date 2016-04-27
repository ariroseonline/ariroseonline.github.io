class Message < ActiveRecord::Base
  account_sid = 'AC87edc493b53d7c81cf78bc7931202114'
	auth_token = 'a7b5e25145a80b2949698ef42cf40b2f'


	def send_message
		@client = Twilio::REST::Client.new('AC87edc493b53d7c81cf78bc7931202114', 'a7b5e25145a80b2949698ef42cf40b2f')
		@client.account.sms.messages.create(
		  :from => '+15168065810',
		  :to => phone_number,
		  :body => text
			)
	end

end
