class AddWorkPlaceToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :work_place, :string
  end
end
