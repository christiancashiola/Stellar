Rails.application.routes.draw do
  
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :tags, only: :create
    resources :likes, only: [:create, :destroy]
  end
  
end
