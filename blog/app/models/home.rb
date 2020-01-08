class Home
  include Mongoid::Document
  include Mongoid::Enum

  before_validation :generate_total_amount

  field :price, type: Float
  field :extra_service, type: Float
  field :total_amount, type: Float
  field :home_features, type: Hash, default: { garden: false, furnished:false, gym:false }
  field :location, type: Array
  field :master_home_id, type: String, default: 'nil'
  enum :status, [:in_progress, :published, :rented]

  belongs_to :owner
  has_many :rents

  validates :price, presence: { message: 'Se requiere precio' }
  validates :extra_service, presence: { message: 'Se requiere servicios extra' }
  validates :price, numericality: true
  validates :extra_service, numericality: true
  validates :total_amount, numericality: true

  def generate_total_amount
    self.total_amount = price + extra_service
  end
end