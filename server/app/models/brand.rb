class Brand < ApplicationRecord
  belongs_to :user

  has_one_attached :logo
  has_many :businesses, dependent: :destroy

  def logo_url
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/2000px-NBC_logo.svg.png"
  end
end
