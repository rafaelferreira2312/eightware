# app/controllers/home_controller.rb
class HomeController < ApplicationController
  skip_before_action :authenticate_user!
  
  def index
    # Renderiza automaticamente app/views/home/index.html.erb
  end
end