class AddWorkPlaceToHomes < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.Float :price
      t.Float :extra_service
      t.Float :total_amount
      t.HASH :home_features
      t.enum :status
    end
  end
end
