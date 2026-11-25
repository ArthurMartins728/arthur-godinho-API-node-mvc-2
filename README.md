# API REST com Node.js em arquitetura MVC

**Aluno:** Arthur Godinho
**Disciplina:** Programação Web III (PW3) - Atividade Prática 02

API REST feita com Node.js, Express e MySQL, dividida em camadas (MVC). Como é só backend, a "View" são as respostas em JSON.

## Como rodar

1. Instale as dependências:
   ```
   npm install
   ```
2. Crie o banco e a tabela rodando o `schema.sql` no MySQL.
3. Copie `.env.example` para `.env` e coloque sua senha do MySQL.
4. Inicie:
   ```
   npm start
   ```

O servidor roda em `http://localhost:3000`.

## Rotas

| Método | Rota            | O que faz           |
|--------|-----------------|---------------------|
| GET    | `/usuarios`     | Lista os usuários   |
| POST   | `/usuarios`     | Cria um usuário     |
| PUT    | `/usuarios/:id` | Atualiza um usuário |
| DELETE | `/usuarios/:id` | Remove um usuário   |

Corpo do POST e do PUT:

```json
{ "nome": "Maria", "email": "maria@email.com" }
```

## Arquitetura em camadas

- **config/db.js:** conexão com o MySQL (pool) usando variáveis do `.env`.
- **models/usuarioModel.js:** só aqui ficam as queries SQL (com `?` para evitar SQL Injection).
- **controllers/usuarioController.js:** recebe a requisição, valida os dados, chama a Model e responde com o status HTTP certo.
- **routes/usuarioRoutes.js:** liga cada rota (GET, POST, PUT, DELETE) ao Controller.
- **app.js:** configura o Express e sobe o servidor, sem nenhum SQL.

## Segurança

`node_modules/` e `.env` estão no `.gitignore`. O `.env.example` mostra as variáveis necessárias sem senhas reais.
