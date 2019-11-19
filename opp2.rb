class Contact
  def initialize
    @contacts = [
      { age: 20, name: 'Jose', last_name: 'Lopez', sex: :masculino },
      { age: 21, name: 'Oscar', last_name: 'Perez', sex: :masculino},
      { age: 22, name: 'Martha', last_name: 'Sanchez', sex: :femenino}
    ]
  end

  def all 
    @contacts
  end

  def find_by(key, param)
    @contacts.select { |contact| contact[key] == param }
  end
end

contact = Contact.new

p contact.all
p '/////////////////////'
p contact.find_by(:name,'Jose')