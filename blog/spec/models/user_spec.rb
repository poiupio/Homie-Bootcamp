require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    user = User.new(name: "Daniel")
    expect(user).to be_valid
  end

  it "is invalid without name" do
    user = User.new(name: nil)
    expect(user).to_not be_valid
  end

  it "Exist associations with rents" do
    user = User.new(name: "Daniel")
    expect(user).to validates_presence_of :rent
  end
end
