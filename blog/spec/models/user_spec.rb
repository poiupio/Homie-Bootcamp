require 'rails_helper'

RSpec.describe User, type: :model do

  it "is valid with valid attributes" do
    user = User.new
    user.email = FFaker::Internet.email
    user.name = FFaker::Name.first_name
    user.last_name = FFaker::Name.last_name
    user.mobile_phone = FFaker::PhoneNumber
    user.work_place = "Homie <3"
    
    expect(user).to be_valid
  end

  it "is invalid without name" do
    user = User.new(name: nil)
    expect(user).to_not be_valid
  end

  it "Validate presence of name" do
    should validate_presence_of(:name)
  end
end
