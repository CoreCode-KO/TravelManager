class UserBluerprint < Blueprinter::Base
  identifier :user_id do |user, _options|
    user.id
  end

  view :basic do
    fields :first_name, :last_name, :email
  end

  view :extended do
    include_view :basic

    fields :birth_date, :phone, :role
  end
end
