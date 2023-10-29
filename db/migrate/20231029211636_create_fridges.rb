class CreateFridges < ActiveRecord::Migration[7.1]
  def change
    create_table :fridges do |t|
      t.string :model
      t.string :brand
      t.timestamps
    end
  end
end
