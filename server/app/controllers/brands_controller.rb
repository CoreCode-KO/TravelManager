class BrandsController < ApplicationController
  before_action :authenticate_request, except: %i[show index]
  before_action :set_brand, only: %i[show update destroy]
  before_action :initialize_brand, only: %i[create]

  # GET /brands
  def index
    @brands = Brand.all

    render json: BrandBlueprint.render(@brands)
  end

  # GET /brands/1
  def show
    render json: @brand
  end

  # POST /brands
  def create
    if @brand.save
      render json: BrandBlueprint.render(@brand), status: :created, location: @brand
    else
      render json: @brand.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /brands/1
  def update
    if @brand.update(brand_params)
      render json: BrandBlueprint.render(@brand)
    else
      render json: @brand.errors, status: :unprocessable_entity
    end
  end

  # DELETE /brands/1
  def destroy
    @brand.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_brand
    @brand = Brand.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def brand_params
    params.permit(:name, :phone, :about, :logo)
  end

  def initialize_brand
    @brand = current_user.brands.build(brand_params)
  end
end
