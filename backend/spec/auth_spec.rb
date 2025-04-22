require 'rails_helper'

RSpec.describe 'Authentication', type: :request do
  let(:user) { create(:user) }
  let(:headers) { valid_headers.except('Authorization') }
  let(:valid_credentials) do
    {
      email: user.email,
      password: user.password
    }.to_json
  end
  let(:invalid_credentials) do
    {
      email: Faker::Internet.email,
      password: Faker::Internet.password
    }.to_json
  end

  describe 'GET /me' do
    context 'when authenticated' do
      before { get '/me', headers: valid_headers }

      it 'returns the user data' do
        expect(json).not_to be_empty
        expect(json['email']).to eq(user.email)
      end
    end

    context 'when not authenticated' do
      before { get '/me' }

      it 'returns unauthorized status' do
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end