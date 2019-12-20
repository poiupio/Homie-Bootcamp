class Home
  include Mongoid::Document
  
  field :price, type: Float
  field :total_amount, type: Float
  field :extra_service, type: String, default: "No"
  field :home_features, type: HASH, default: { garden: false, furnished:false, gym:false }
  
  validates :home_features[:garden], inclusion: [true, false]
  validates :home_features[:furnished], inclusion: [true, false]
  validates :home_features[:gym], inclusion: [true, false]
  validates :price, presence: { message: 'Se requiere precio' }
  validates :total_amount, presence: { message: 'Se requiere cantidad total' }

  belongs_to :owner
  has_many :rents
end