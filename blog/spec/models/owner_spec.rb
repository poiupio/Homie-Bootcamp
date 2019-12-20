require 'rails_helper'

RSpec.describe Owner, type: :model do
  let!(:owner) { create(:owner) }

  context "Valid creation of an user" do
    it "Is valid with valid attributes" do
      expect(owner).to be_valid
    end
  end  

  context "Invalid creation of an user" do
    it "Is invalid without curp" do
      owner.curp = nil
      expect(owner).to_not be_valid
    end
  end

  context "validate fields" do
    it "Validate presence of curp" do
      should validate_presence_of(:curp)
    end

    it "Validate length of curp" do
      should validate_length_of(:curp)
    end
  end

  it "Is asociated with rents" do
    should have_many(:homes)
  end

  it "Is asociated with user" do
    should belongs_to(:user)
  end
end
