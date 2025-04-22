FROM ruby:3.2.3

# Instala dependências essenciais
RUN apt-get update -qq && \
    apt-get install -y \
    build-essential \
    libpq-dev \
    postgresql-client \
    nodejs \
    npm \
    vim && \
    rm -rf /var/lib/apt/lists/*

# Configura ambiente
ENV RAILS_ENV=development
ENV BUNDLE_PATH=/usr/local/bundle
ENV BUNDLE_APP_CONFIG=/usr/local/bundle

WORKDIR /app

# Instala bundler mais recente
RUN gem install bundler -v 2.4.22

# Copia arquivos de dependência
COPY Gemfile Gemfile.lock ./

# Instala gems
RUN bundle install

# Copia a aplicação
COPY . .

# Script de entrada
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]