<div>
<h1 align="center">
  <br>
  <a href="https://eightware.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAggMYv2-PCbDdMohkHUou-cwJphHS5HnfEg&s" alt="logo" width="120"></a>
  <br>
   Eightware Technical
  <br>
</h1>
<h4 align="center">Aplicação fullstack com backend Ruby on Rails 7.2 e frontend Next.js 15, utilizando autenticação JWT. <a href="https://eightware.com/" target="_blank">
</div>

## Pré-requisitos
- Docker e Docker Compose
- Node.js 18+
- Ruby 3.2.2

## Configurar
1. Clonar o repositório:
 ```bash
git clone https://github.com/rafaelferreira2312/teste-eightware.git
cd teste-eightware
```

2. Inicie os serviços:
 ```bash
docker-compose up --build
```

3. Inicializar o banco de dados (em um novo terminal):
```bash
docker-compose exec backend rails db:create db:migrate
```

## Serviços
1. Backend: http://localhost:3000
2. Frontend: http://localhost:3001    
3. PGAdmin: http://localhost:5050 (admin@example.com / admin) PostgreSQL: port 5432

## Executando testes
1. Teste Backend
```bash
docker-compose exec backend rspec
```
2. Teste Frontend
```bash
docker-compose exec frontend npm test
```

## Implantação
1. Backend no Render.
2. Crie um novo serviço Web no Render.
3. Conecte seu repositório GitHub.
4. Definir variável de ambientes:
    - DATABASE_URL: Sua string de conexão PostgreSQL.
    - DEVISE_JWT_SECRET_KEY: Uma chave secreta segura.
    - RAILS_ENV: Produção.
6. Definir comando de construção: bundle install && rails db:migrate.
7. Definir comando de início: rails server -p $PORT -b 0.0.0.0

## Frontend no Vercel

1. Importe seu repositório GitHub para Vercel.
2. Defina variáveis ​​de ambiente:
   - NEXT_PUBLIC_API_URL: Seu URL de back-end (e.g., https://your-backend.onrender.com).
3. Implantar!

## Variáveis ​​de ambiente
1. Backend
   - DATABASE_URL: String de conexão do PostgreSQL.
   - DEVISE_JWT_SECRET_KEY: Chave secreta para criptografia JWT.
   - RAILS_ENV: Ambiente (development/production).

2. Frontend
   - NEXT_PUBLIC_API_URL: URL da API de backend.

## Considerações Finais

Esta solução implementa todos os requisitos do teste técnico:

1. **Backend**:
   - Ruby on Rails 7.2 com Devise + JWT
   - Endpoints RESTful para autenticação
   - Testes RSpec cobrindo todos os cenários
   - Configuração segura de JWT

2. **Frontend**:
   - Next.js 15 com App Router
   - Autenticação manual sem next-auth
   - Rotas protegidas
   - Armazenamento seguro do JWT
   - Testes com Jest e Testing Library

3. **Infraestrutura**:
   - Docker Compose com PostgreSQL e PGAdmin
   - Pronto para deploy no Render (backend) e Vercel (frontend)
   - Configuração de ambiente clara

4. **Boas práticas**:
   - TDD implementado em ambas as camadas
   - Código limpo e organizado
   - Segurança considerada em todos os aspectos
   - Documentação completa

Para executar o projeto localmente, basta seguir as instruções no README.md. Para deploy, as configurações para Render e Vercel estão detalhadas.