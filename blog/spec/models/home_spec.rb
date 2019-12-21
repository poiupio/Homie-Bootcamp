require 'rails_helper'

RSpec.describe Home, type: :model do
  let!(:home) { create(:home) }

  context "Valid creation of an home" do
    it "is valid with valid attributes" do
      expect(home).to be_valid
    end
  end  

  context "Invalid creation of an home" do
    it "is invalid without email" do
      home.price = nil
      expect(home).to_not be_valid
    end

    it "is invalid without name" do
      home.extra_service = nil
      expect(home).to_not be_valid
    end
  end

  context "validate fields" do
    it "Validate presence of email" do
      should validate_presence_of(:price)
    end

    it "Validate presence of name" do
      should validate_presence_of(:extra_service)
    end

    it "Validate presence of name" do
      should validate_numericality_of(:price)
    end

    it "Validate presence of name" do
      should validate_numericality_of(:extra_service)
    end

    it "Validate presence of name" do
      should validate_numericality_of(:total_amount)
    end
  end

  it "Is asociated with rents" do
    should have_many(:rents)
  end

  it "Is asociated with home" do
    should belongs_to(:owner)
  end
end