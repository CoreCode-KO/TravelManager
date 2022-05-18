class CountriesController < ApplicationController
  # GET /countries
  def index
    @countries = Country.all

    render json: @countries
  end

  # GET /countries/1
  def show
    render json: CountryBlueprint.render(Country.find(params[:id]))
  end
end
