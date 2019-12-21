namespace :generate do
  desc 'Generating two homes for you ª3ª'
  task :houses => :enviroment do
    Home.create(
      owner: self::create_owner,
      price: 123456.78,
      extra_service: 100.11,
      home_features: {
        garden: true,
        furnished: true,
        gym: true
      },
      status: :rented
    )

    Home.create(
      owner: self::create_owner,
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

  def create_user do
    user = User.create(
      name: "Daniel",
      last_name: "Rosales",
      email: "rosalescd@hotmail.com",
      mobile_phone: "9991336601",
      work_place: "Homie <3"
    )
  end

  def create_owner do
    owner = Owner.create(
      user: self::create_user,
      curp: "123456789123456789", 
      registered_in_srpago: true
    )
  end
end