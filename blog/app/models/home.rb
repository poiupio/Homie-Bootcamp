class Home
  include Mongoid::Document
  include Mongoid::Enum
  
  field :price, type: Float
  field :extra_service, type: Float
  field :total_amount, type: Float,  default: (price.to_f + total_amount.to_f)
  field :home_features, type: HASH, default: { garden: false, furnished:false, gym:false }
  enum :status, [:in_progress, :published, :rented]
  
  belongs_to :owner
  has_many :rents

  validates :price, presence: { message: 'Se requiere precio' }
  validates :extra_service, presence: { message: 'Se requiere servicios extra' }
  validates :price, numericality: true
  validates :extra_service, numericality: true
  validates :total_amount, numericality: true
end