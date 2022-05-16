class UsersController < ApplicationController
  skip_before_action :authenticate_request, only: %i[create]
  before_action :set_user, only: %i[show destroy]
  before_action :initialize_user, only: %i[create]

  def show
    render json: @user, status: :ok
  end

  def create
    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :birth_date, :password, :email, :phone)
  end

  def set_user
    @user = User.find(params[:id])
  end

  def initialize_user
    @user = User.new(user_params)
  end
end
