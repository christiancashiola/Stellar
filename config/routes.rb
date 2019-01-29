Rails.application.routes.draw do
  
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :tags, only: :create
    resources :likes, only: [:create, :destroy]
    resources :follows, only: :create
    delete '/follows/:user_id', to: 'follows#destroy', as: 'unfollow'
  end
end
