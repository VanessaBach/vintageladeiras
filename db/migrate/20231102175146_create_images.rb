class CreateImages < ActiveRecord::Migration[7.1]
  def change
    create_table :images do |t|
      t.string :title
      t.string :filename
      t.string :description

      t.timestamps
    end
  end
end
