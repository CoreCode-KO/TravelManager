class Business < ApplicationRecord
  belongs_to :brand
  belongs_to :country
  belongs_to :category
end
