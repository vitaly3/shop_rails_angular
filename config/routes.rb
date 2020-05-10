Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resource :tests
  scope '/api' do
    get 'tests', to: 'tests#index'
  end
  # get '*other', to: 'static#index'

end
