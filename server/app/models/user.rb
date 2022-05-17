class User < ApplicationRecord
  require "securerandom"

  enum role: { user: 0, boss: 1, manager: 2, owner: 3,
               editor: 4, moderator: 5, admin: 6 }

  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true

  # rubocop:disable Metrics/MethodLength
  def jwt_payload
    {
      user_id: id,
      email: email,
      first_name: first_name,
      last_name: last_name,
      birth_date: birth_date,
      phone: phone,
      role: role,
    }
  end
  # rubocop:enable Metrics/MethodLength
end
