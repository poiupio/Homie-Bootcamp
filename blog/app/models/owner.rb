class Owner
  include Mongoid::Document
  
  field :curp, type: String
  field :registered_in_srpago, type: boolean, default: false
  
  belongs_to :user
  has_many :homes
  
  validates :curp,  presence: { message: 'Introduzca un curp' }
  validates :curp, length: {is: 18}
end
