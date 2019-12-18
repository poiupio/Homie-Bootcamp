require 'rails_helper'

RSpec.describe "Reports" do
  it "GET /reports/info" do
    expect(get: "reports/info").to route_to("reports#info")
  end
end