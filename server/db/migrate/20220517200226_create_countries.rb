class CreateCountries < ActiveRecord::Migration[7.0]
  def change
    create_table :countries do |t|
      t.string :name, null: false
      t.string :short_name, null: false

      t.timestamps
    end

    add_index :countries, :name, unique: true
    add_index :countries, :short_name, unique: true
  end
end
