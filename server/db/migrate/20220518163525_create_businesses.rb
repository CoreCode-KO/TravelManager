class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.references :brand, null: false, foreign_key: true
      t.string :name
      t.string :phone
      t.string :tax_id
      t.references :country, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
