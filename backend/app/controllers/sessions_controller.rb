class SessionsController < Devise::SessionsController
    respond_to :json
  
    def create
      self.resource = warden.authenticate!(auth_options)
      sign_in(resource_name, resource)
      render json: { message: 'Logged in successfully.', user: resource, token: request.env['warden-jwt_auth.token'] }
    end
  
    def destroy
      signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
      render json: { message: 'Logged out successfully.' } if signed_out
    end
  end