class BusinessBlueprint < Blueprinter::Base
  identifier :id

  fields :name, :phone, :tax_id
  association :brand, blueprint: BrandBlueprint
  association :country, blueprint: CountryBlueprint
  association :category, blueprint: CategoryBlueprint
end
