class ApplicationController < ActionController::API
  include JwtAuthorizable
  NotAuthorized = Class.new(ActionController::RoutingError)

  rescue_from ApplicationController::NotAuthorized do |_exception|
    render_error_page(status: 401, text: "Unauthorized")
  end

  attr_reader :current_user

  def authenticate_request
    header = request.headers["Authorization"]
    decoded = jwt_decode(header.split.last) if header
    @current_user = User.find(decoded[:user_id])
  end
end
