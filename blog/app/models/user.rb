class User
  include Mongoid::Document
  validates :name, presence: {message: 'Hola'}
  field :email, type: String
  field :name, type: String
  field :last_name, type: String
  field :mobile_phone, type: String
  field :work_place, type: String
end
