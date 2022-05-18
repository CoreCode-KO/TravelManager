class BusinessesController < ApplicationController
  before_action :authenticate_request, except: %i[show index]
  before_action :set_business, only: %i[show update destroy]
  before_action :initialize_business, only: %i[create]

  # GET /businesses
  def index
    @businesses = Business.all

    render json: BusinessBlueprint.render(@businesses)
  end

  # GET /businesses/1
  def show
    render json: @business
  end

  # POST /businesses
  def create
    if @business.save
      render json: BusinessBlueprint.render(@business), status: :created, location: @business
    else
      render json: @business.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /businesses/1
  def update
    if @business.update(business_params)
      render json: BusinessBlueprint.render(@business)
    else
      render json: @business.errors, status: :unprocessable_entity
    end
  end

  # DELETE /businesses/1
  def destroy
    @business.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_business
    @business = Business.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def business_params
    params.permit(:brand_id, :name, :phone, :tax_id, :country_id, :category_id)
  end

  def initialize_business
    @business = current_user.brands
      .find(business_params[:brand_id])
      .businesses
      .build(business_params)
  end
end
