class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email, null: false
      t.string :password_digest, null: false
      t.date :birth_date
      t.string :phone
      t.integer :role, null: false, default: 0

      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
