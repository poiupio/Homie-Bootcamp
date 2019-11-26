def calculate (first_number, second_number)
  yield(first_number, second_number) if block_given?
end

puts calculate(15, 10) {|first_number, second_number| first_number - second_number}
puts calculate(15, 10) {|first_number, second_number| first_number + second_number}
puts calculate(15, 10) {|first_number, second_number| first_number * second_number}
puts calculate(15, 10) {|first_number, second_number| first_number / second_number}