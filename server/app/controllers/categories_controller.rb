class CategoriesController < ApplicationController
  # GET /categories
  def index
    @categories = Category.all

    render json: CategoryBlueprint.render(@categories)
  end

  # GET /categories/1
  def show
    render json: CategoryBlueprint.render(Category.find(params[:id]))
  end
end
