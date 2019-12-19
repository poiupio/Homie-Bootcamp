class Home
  include Mongoid::Document
  belongs_to :owner
  has_many :rents

  field :price, type: Float
  field :extra_service, type: String
  field :total_amount, type: Float
  validates :home_features[:garden], inclusion: [true, false]
  validates :home_features[:furnished], inclusion: [true, false]
  validates :home_features[:gym], inclusion: [true, false]
  field :home_features, type: HASH, default: { garden: false, furnished:false, gym:false }
end