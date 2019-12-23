class UserMailer < ApplicationMailer
  def new_mail
    mail(to: "poiupio@hotmail.com", subject: 'Saludos invocador')
  end
end
