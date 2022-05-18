Rails.application.routes.draw do
  resources :businesses
  resources :brands
  resources :categories, except: %i[create update destroy]
  resources :countries, except: %i[create update destroy]
  resources :users, except: %i[index]
  post "/auth/login", to: "authentication#login"
end
