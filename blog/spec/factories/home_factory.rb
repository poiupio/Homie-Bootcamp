FactoryBot.define do
  factory :home do
    owner { FactoryBot.create(:owner) } 
    price { Faker::Number.decimal(l_digits: 3, r_digits: 3) }
    total_amount { Faker::Number.decimal(l_digits: 3, r_digits: 3) }
    extra_service { "Si" }
    home_features do { 
        garden: true,
        furnished: true,
        gym: true,
      }
  end
end