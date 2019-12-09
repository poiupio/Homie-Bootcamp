require 'set'

def count_interseccions(range_of_numbers)
  combinations = range_of_numbers.combination(2).to_a
  ocurrences = 0
  
  combinations.each do |pair|
    ocurrences += 1 if numbers_intersects?(pair)
  end

  ocurrences
end

def numbers_intersects?(pair)
  first_number = pair[0]
  second_number = pair[1]

  return false if first_number[0] >= second_number[1]
  return false if first_number[1] <= second_number[0]

  true
end

puts count_interseccions([[40, 85], [10, 60], [70, 160]])