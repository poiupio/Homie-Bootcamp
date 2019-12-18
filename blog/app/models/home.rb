class Home
  include Mongoid::Document
  field :price, type: String
  field :extra_service, type: String
  field :total_amount, type: String
  field :home_features


  validates :home_features[:garden], inclusion: { in: [true, false] }
  validates :home_features[:furnished], inclusion: { in: [true, false] }
  validates :home_features[:gym], inclusion: { in: [true, false] }
  store :home_features, accessors: [ :garden, :furnished, :gym ], coder: HASH
end