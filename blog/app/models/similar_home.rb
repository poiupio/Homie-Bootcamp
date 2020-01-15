class SimilarHome
  def self.get_homes
    owners = Owner.pluck(:id)
    owners.each do |owner_id|
      owner_homes = Home.where(owner_id: owner_id, _status: 'published', master_home_id: nil)
      next unless owner_homes.count >= 1

      homes_compared = compare_homes(owner_homes)
      next unless homes_compared

      print_eql_homes(owner_id, homes_compared)
    end
  end

  def self.compare_homes(owner_homes)
    total_amounts = []
    locations = []

    owner_homes.each do |home|
      total_amounts.push(home.total_amount)
      locations.push(home.location)
    end

    eql_amounts = eql_indexs?(total_amounts)
    eql_locations = eql_indexs?(locations)

    return false if eql_amounts.empty?

    eql_homes = eql_amounts & eql_locations
    return false unless eql_homes.count > 1

    eql_homes_ids = []
    eql_homes.each do |index|
      eql_homes_ids.push(owner_homes[index].id)
    end

    eql_homes_ids
  end

  def self.eql_indexs?(atributes)
    indexes=[]
    atributes.each_with_index do |property, index| 
      atributes.count(property) > 1 ? indexes<<index : next 
    end
    
    indexes
  end

  def self.print_eql_homes(owner_id, homes_compared)
    owner = Owner.find(owner_id)

    homes_compared.each do |home_id|
      home = Home.find(home_id)
      p "#{owner.user.name} #{owner.user.last_name} #{home_id} #{home.price} #{home.status} #{home.location}"
    end
  end
end
