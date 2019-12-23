Rails.application.routes.draw do
  get :hello_world, to: "hello_world#index"
  get "reports/info"
  get "reports/send_mail"
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
