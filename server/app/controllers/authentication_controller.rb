class AuthenticationController < ApplicationController
  def login
    if user&.authenticate(params[:password])
      render json: { token: jwt_encode(serialized_user) }, status: :ok
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  protected

  def user
    @user ||= User.find_by(email: params[:email])
  end

  def serialized_user
    UserBluerprint.render_as_hash(user, view: :extended)
  end
end
