class ReportsController < ApplicationController
  def info
    render(:layout => "layouts/report")
  end

  def send_mail
    UserMailer.new_mail.deliver_now
  end
end
