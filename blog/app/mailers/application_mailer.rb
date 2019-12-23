class ApplicationMailer < ActionMailer::Base
  add_template_helper(EmailHelper)
  default from: 'Homie@example.com'
  layout 'mailer'
end