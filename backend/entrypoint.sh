#!/bin/bash
set -e

# Remove server.pid se existir
rm -f /app/tmp/pids/server.pid

# Configura o banco de dados
if [ "$RAILS_ENV" = "development" ]; then
  bundle exec rails db:create db:migrate
fi

exec "$@"