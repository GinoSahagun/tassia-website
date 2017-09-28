Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # static pages
  get "/pages/:page" => "pages#show"

  # home page
  root 'welcome#index'


end
