require "jwt"

module JwtAuthorizable
  extend ActiveSupport::Concern

  SECRET_KEY = ENV.fetch("JWT_SECRET_KEY")

  def jwt_encode(payload, exp = 7.days.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end

  def jwt_decode(token)
    HashWithIndifferentAccess.new(JWT.decode(token, SECRET_KEY)[0])
  end
end
