class Rent 
  include Mongoid::Document
  
  enum :status, [:started, :finished, :canceled]

  belongs_to :user
  belongs_to :home
end
