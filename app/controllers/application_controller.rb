class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :log

  def log
    Impression.create
  end
end
