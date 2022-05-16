Rails.application.routes.draw do
  resources :users, except: %i[index]
  post "/auth/login", to: "authentication#login"
end
