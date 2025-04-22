require 'rails_helper'

RSpec.describe 'Sessions', type: :request do
  let(:user) { create(:user, email: 'test@example.com', password: 'password') }

  describe 'POST /login' do
    context 'with valid credentials' do
      it 'returns a JWT token' do
        post '/login', params: { user: { email: user.email, password: 'password' } }
        
        expect(response).to have_http_status(:ok)
        expect(json['token']).to be_present
        expect(json['message']).to eq('Logged in successfully.')
      end
    end

    context 'with invalid credentials' do
      it 'returns an error' do
        post '/login', params: { user: { email: user.email, password: 'wrong' } }
        
        expect(response).to have_http_status(:unauthorized)
        expect(json['error']).to eq('Invalid Email or password.')
      end
    end
  end
end