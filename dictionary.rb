class Dictionary 
  @words = [
    ['apartment', 'departamento'], 
    ['tenant', 'inquilino'], 
    ['owner', 'propietario'], 
    ['rent', 'renta']
  ]

  def self.translate (lenguaje, word)
    word.downcase!
    case lenguaje
    when 'spanish'
      return (@words.assoc(word))[1]
    when 'english'
      return (@words.rassoc(word))[0]
    end
  end
end

p Dictionary.translate('spanish','owner')
