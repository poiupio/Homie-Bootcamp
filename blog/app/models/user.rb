class User
  include Mongoid::Document

  field :email, type: String
  field :name, type: String
  field :last_name, type: String
  field :mobile_phone, type: String
  field :work_place, type: String
 
  validates :email, presence: { message: 'Se requiere email' }
  validates :name, presence: { message: 'Se requiere nombre' }
  validates :last_name, presence: { message: 'Se requiere apellidos' }
  validates :mobile_phone, presence: { message: 'Se requiere telefono' }
  validates :work_place, presence: { message: 'Se requiere lugar de trabajo' }
 
  has_many :rents
end
