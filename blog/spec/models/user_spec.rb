require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { create(:user) }

  context "Valid creation of an user" do
    it "is valid with valid attributes" do
      expect(user).to be_valid
    end
  end  

  context "Invalid creation of an user" do
    it "is invalid without email" do
      user.email = nil
      expect(user).to_not be_valid
    end

    it "is invalid without name" do
      user.name = nil
      expect(user).to_not be_valid
    end

    it "is invalid without last name" do
      user.last_name = nil
      expect(user).to_not be_valid
    end

    it "is invalid without movile phone" do
      user.mobile_phone = nil
      expect(user).to_not be_valid
    end

    it "is invalid without movile phone" do
      user.work_place = nil
      expect(user).to_not be_valid
    end
  end

  context "validate fields" do
    it "Validate presence of email" do
      should validate_presence_of(:email)
    end

    it "Validate presence of name" do
      should validate_presence_of(:name)
    end

    it "Validate presence of last name" do
      should validate_presence_of(:last_name)
    end

    it "Validate presence of mobile phone" do
      should validate_presence_of(:mobile_phone)
    end

    it "Validate presence of work place" do
      should validate_presence_of(:work_place)
    end
  end

  it "Is asociated with rents" do
    should have_many(:rents)
  end
end
