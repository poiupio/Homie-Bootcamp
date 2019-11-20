def birthday(s, d, m)
    currences = 0
    s.each_index { |number| currences += 1 if s[number,m].sum == d}
    
    currences
end