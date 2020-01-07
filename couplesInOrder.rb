def alphabetic_order (couples)
  couples.each do |couple| 
    lower_couple = couple.upcase
    lower_comparator = (couple.upcase).chars.sort.join
    return "#{couple} isnt consecutive" unless (lower_couple.eql? lower_comparator)
  end
  "All the couples are consecutive"
end

p alphabetic_order(["AB", "bc", "Dc"])
p alphabetic_order(["ab", "BC", "cD"])
