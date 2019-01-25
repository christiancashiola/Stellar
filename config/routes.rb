Rails.application.routes.draw do
  
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :update, :destroy]
    get '/post/:id', to: 'posts#show'
    get '/posts/:criterion', to: 'posts#index'
    resources :tags, only: :create
  end
  
end
