require 'rails_helper'

RSpec.describe ReportsController, type: :controller do
  it "renders the info template" do
    get :info
    expect(response).to render_template("info")
  end
end
