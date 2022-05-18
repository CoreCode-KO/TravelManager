class BrandBlueprint < Blueprinter::Base
  identifier :id

  fields :name, :about, :phone, :logo_url
end
