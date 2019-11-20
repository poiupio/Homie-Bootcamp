class Car
  state = 'stop'

  def initialize (brand, year, color)
    @brand = brand
    @year = year
    @color = color
  end

  def start
    raise('The car must be stoped to start') unless @state == 'stop'
    @state = 'started'
  end

  def travel
    raise('The car must be started to travel') unless @state == 'started'
    @state = 'traveling'
 
  end

  def stop
    raise('the car must be started or in travel to stop') unless ['started', 'traveling'].include?(state)
    @state = 'stop'
  end
end