# Project Cursos de programação (Ignite Lab 01 - RocketSeat)

- NestJS
- GraphQL
- Apache Kafka
- Next.js
- Apollo Client (GraphQL)
- Docker
- Auth0

# Configuração de autenticação de usuários

- O sistema utiliza a integração do Auth0 (https://auth0.com/), criar uma aplicação e configurar as informações de AUTH0_AUDIENCE e AUTH0_DOMAIN dentro dos arquivos .env dos microserviços de classroom e purchases

# Configurações

- Inicializar os containers docker: docker-compose up -d
- Inicializar micro serviços:
    cd classroom/ && npm run start:dev
    cd purchases/ && npm run start:dev
    cd gateway/ && npm run start:dev
- Inicializar front-end: cd web/ && yarn dev

# Urls

- Graphql: http://localhost:3332/graphql
- Kafka UI: http://localhost:8080/
- Front-end: http://localhost:3000/

## Funcionalidades

### Serviço de compras (purchases)

- [Admin] Cadastro de produtos
- [Admin] Listagem de produtos

- [Auth] Listagem de compras

- [Public] Compra de um produto
- [Public] Lista produtos disponíveis p/ compra

### Serviço de sala de aula (classroom)

- [Admin] Listar matrículas
- [Admin] Listar alunos
- [Admin] Listar cursos
- [Admin] Cadastrar cursos

- [Auth] Listar cursos que tenho acesso
- [Auth] Acessar conteúdo do curso

----------------------------------------------------------------

[X] Importar telas do Tailwind
[X] URL de Logout no Auth0
[X] Query das minhas matrículas
[X] Query de produtos
[X] Mutation de realizar matrícula