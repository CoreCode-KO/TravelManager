class ApplicationController < ActionController::API
  include JwtAuthorizable

  before_action :authenticate_request

  private

  def authenticate_request
    header = request.headers["Authorization"]
    decoded = jwt_decode(header.split.last) if header
    @current_user = User.find(decoded[:user_id])
  end
end
