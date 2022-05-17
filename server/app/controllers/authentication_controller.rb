class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request

  def login
    if user&.authenticate(params[:password])
      render json: { token: jwt_encode(user.jwt_payload) }, status: :ok
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  def user
    @user ||= User.find_by(email: params[:email])
  end
end
