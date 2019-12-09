def count_words (words, limit)
  combined_words = words.join
  combined_words.scan(/.{1,#{limit}}/)
end

p count_words(['hola', 'este', 'es', 'un', 'nuevo', 'mensaje'], 10)