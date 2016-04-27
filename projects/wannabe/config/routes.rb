Wannabe::Application.routes.draw do
  
  resources :job_profiles, :except => [:destroy]

  root :to => 'job_profiles#index'

end
