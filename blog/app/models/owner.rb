class Owner
  include Mongoid::Document
  belongs_to :user
  has_many :homes

  field :curp, type: String
  field :registered_in_srpago, type: boolean
end
