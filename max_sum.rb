def max_sum(array_of_arrays)
  max_rows = max_sum_rows(array_of_arrays) 
  max_column = max_sum_columns(array_of_arrays) 

  max_rows > max_column ? max_rows : max_column
end

def max_sum_columns(array_of_arrays)
  array_transpose = array_of_arrays.transpose[1]
  p array_transpose.inject(:+)
end

def max_sum_rows(array_of_arrays)
  max_sum = 0
  array_of_arrays.each do |array|
    array_sum = array.sum
    max_sum = (max_sum > array_sum ? max_sum : array_sum)
  end
  p max_sum
end

A = [[6,7,8], [1,4,29], [4,78,12]]
p max_sum(A)
