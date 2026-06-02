# Rocket Notes — Backend

API REST para gerenciamento de notas com autenticação, tags e links.

## Sobre o projeto

Backend da aplicação Rocket Notes, desenvolvida durante a trilha Explorer da Rocketseat. Fornece endpoints para autenticação de usuários, criação e listagem de notas, gerenciamento de tags e upload de avatar.

## Funcionalidades

- Cadastro e autenticação de usuários com JWT
- CRUD de notas com suporte a tags e links
- Busca de notas por título e tags
- Upload de avatar com armazenamento em disco
- Middleware de autenticação para rotas protegidas

## Tecnologias

- Node.js
- Express
- Knex.js
- SQLite
- JWT (jsonwebtoken)
- Bcrypt
- Multer

## Estrutura

```
src/
├── configs/        # Configurações de auth e upload
├── controllers/    # Lógica de cada recurso (notas, sessões, tags, usuários)
├── database/       # Migrations e conexão com SQLite
├── middlewares/    # Autenticação
├── providers/      # Storage em disco
├── routes/         # Definição das rotas
└── utils/          # Tratamento de erros e servidor
```

## Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/lukarodrigue/BackEnd-Notes

# Instale as dependências
npm install

# Execute as migrations
npm run migrate

# Inicie o servidor em desenvolvimento
npm run dev
```

API rodando em `http://localhost:3333`

## Rotas principais

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /users | Criar usuário |
| POST | /sessions | Autenticar usuário |
| GET | /notes | Listar notas do usuário |
| POST | /notes | Criar nota |
| DELETE | /notes/:id | Excluir nota |
| GET | /tags | Listar tags do usuário |
| PATCH | /users/avatar | Atualizar avatar |

## Autor

Luka Rodrigues Gonçalves · [LinkedIn](https://linkedin.com/in/lukarodrigue)
