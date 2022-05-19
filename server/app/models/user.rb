class User < ApplicationRecord
  require "securerandom"

  enum role: { user: 0, boss: 1, manager: 2, owner: 3,
               editor: 4, moderator: 5, admin: 6 }

  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true

  has_many :brands, dependent: :destroy
end
