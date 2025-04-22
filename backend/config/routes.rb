Rails.application.routes.draw do
  root to: 'home#index'
  
  devise_for :users, controllers: {
    registrations: 'registrations',
    sessions: 'sessions'
  }

  devise_scope :user do
    post 'signup', to: 'registrations#create'
    post 'login', to: 'sessions#create'
    delete 'logout', to: 'sessions#destroy'
  end

  get 'me', to: 'users#me'
end