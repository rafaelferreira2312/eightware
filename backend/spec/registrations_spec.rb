require 'rails_helper'

RSpec.describe 'Registrations', type: :request do
  describe 'POST /signup' do
    context 'with valid parameters' do
      let(:valid_params) do
        {
          user: {
            email: 'test@example.com',
            password: 'password',
            password_confirmation: 'password'
          }
        }
      end

      it 'creates a new user' do
        expect {
          post '/signup', params: valid_params
        }.to change(User, :count).by(1)
        
        expect(response).to have_http_status(:created)
        expect(json['message']).to eq('Signed up successfully.')
      end
    end

    context 'with invalid parameters' do
      let(:invalid_params) do
        {
          user: {
            email: '',
            password: 'short',
            password_confirmation: 'mismatch'
          }
        }
      end

      it 'does not create a new user' do
        expect {
          post '/signup', params: invalid_params
        }.not_to change(User, :count)
        
        expect(response).to have_http_status(:unprocessable_entity)
        expect(json['errors']).to be_present
      end
    end
  end
end