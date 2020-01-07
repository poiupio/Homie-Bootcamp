require 'rails_helper'

RSpec.describe Rent, type: :model do
  let!(:rent) { create(:rent) }

  it "Is asociated with home" do
    should belongs_to(:homes)
  end

  it "Is asociated with user" do
    should belongs_to(:user)
  end
end
