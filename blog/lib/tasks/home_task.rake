namespace :generate do
  desc 'Generating two homes for you ª3ª'
  task homes: :environment do
    @user = User.find_or_create_by(
      email: "correo@hotmail.com",
      name: "Contreras",
      last_name: "Rosales",
      mobile_phone: "9992970700",
      work_place: "Homie <3",
    )

    @owner = Owner.find_or_create_by(
      user: @user,
      curp: "DICA770826MNTZHN35",
      registered_in_srpago: true
    )

    Home.create_with(owner_id: @owner.id).find_or_create_by(
      price: 99.66,
      extra_service: 66.99,
      home_features: {
        garden: true,
        furnished: true,
        gym: true
      },
      location: [4.20, 20.4],
      _status: :published
    )

    Home.create_with(owner_id: @owner.id).find_or_create_by(
      price: 6312.1,
      extra_service: 912.66,
      home_features: {
        garden: true,
        furnished: true,
        gym: true
      },
      location: [4.240, 203.4],
      _status: :published
    )
  end
end