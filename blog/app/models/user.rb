class User
  include Mongoid::Document

  field :email, type: String
  field :name, type: String
  field :last_name, type: String
  field :mobile_phone, type: String
  field :work_place, type: String
 
  validates :name, presence: { message: 'Se requiere nombre' }
 
  has_many :rents
end
