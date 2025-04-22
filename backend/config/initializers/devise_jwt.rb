Devise.setup do |config|
    config.jwt do |jwt|
      jwt.secret = ENV.fetch('DEVISE_JWT_SECRET_KEY') { Rails.application.credentials.devise_jwt_secret_key }
      jwt.dispatch_requests = [
        ['POST', %r{^/login$}]
      ]
      jwt.revocation_requests = [
        ['DELETE', %r{^/logout$}]
      ]
      jwt.expiration_time = 1.day.to_i
    end
  end