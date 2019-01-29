Rails.application.routes.draw do
  
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :tags, only: :create
    resources :likes, only: [:create, :destroy]
    resources :follows, only: :create
    delete '/follows/:user_id', to: 'follows#destroy', as: 'unfollow'
    resources :comments, only: [:index, :show, :create, :update, :destroy]
  end
end
