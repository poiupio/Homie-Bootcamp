def hash_sheck(parameters, value)
  parameters.each{|hash_element|
    condition = hash_element[0].to_i
    return hash_element[1] if(value < condition)
  }
end

hash_sheck({
    '0' => 'Sin fico', 
    '10' => 'Poco fico',
    '20' => 'Con fico regular'
  }, 12)