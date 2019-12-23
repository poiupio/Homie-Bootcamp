namespace :generate do
  desc 'Generating two homes for you ª3ª'
  task homes: :environment do
    @user = User.find_or_create_by(
      email: "rosalescd@hotmail.com",
      name: "Daniel",
      last_name: "Rosales",
      mobile_phone: "9991336601",
      work_place: "Homie <3",
    )

    @owner = Owner.find_or_create_by(
      user: @user,
      curp: "123456789123456789", 
      registered_in_srpago: true
    )

    Home.create_with(owner: @owner).find_or_create_by(
      price: 876543.21,
      extra_service: 666.99,
      home_features: {
        garden: true,
        furnished: true,
        gym: true
      },
      status: :rented
    )

    Home.create_with(owner: @owner).find_or_create_by(
      price: 123456.78,
      extra_service: 100.11,
      home_features: {
        garden: true,
        furnished: true,
        gym: true
      },
      status: :published
    )
  end
end