FROM node:18-alpine

WORKDIR /app

# Cache de dependências
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Build da aplicação
RUN npm run build

EXPOSE 3000

# Inicia o servidor de desenvolvimento
CMD ["npm", "run", "dev"]