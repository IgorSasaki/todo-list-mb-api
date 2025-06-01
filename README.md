# 🧠 To-Do List API – Mentes Brilhantes (MVC)

Este repositório contém a API RESTful do projeto **To-Do List**, desenvolvida com **Node.js**, **Express**, **SQLite** e **TypeORM**, seguindo o padrão **MVC (Model-View-Controller)**. Este projeto foi construído nas aulas do curso de backend do programa **Mentes Brilhantes – Araraquara/SP**, com foco em ensinar arquitetura de APIs, integração com frontend e boas práticas de desenvolvimento.

---

## ✅ Projeto Concluído

Esta API está 100% funcional e integrada ao frontend da aplicação de Lista de Tarefas.

- Permite criar e listar tarefas
- Salva dados em banco de dados real (SQLite)
- Retorna dados formatados em JSON
- Está pronta para deploy local ou em serviços como Render, Railway, etc.

---

## 📁 Estrutura do Projeto (MVC)

```
src/
├── config/
│   └── data-source.js       # Configuração da conexão com o banco (Model)
├── controllers/
│   └── TaskController.js    # Lógica das requisições (Controller)
├── database/
│   └── todo.sqlite          # Banco de dados SQLite
├── entities/
│   └── Task.js              # Definição da entidade Task (Model)
├── routes/
│   └── task.routes.js       # Endpoints da aplicação (View)
├── index.js                 # Arquivo principal da aplicação
```

---

## 🚀 Funcionalidades da API

- `GET /tasks` → Lista todas as tarefas existentes no banco
- `POST /tasks` → Cria uma nova tarefa com título e descrição

---

## 🧰 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)
- [TypeORM](https://typeorm.io/)
- Reflect-metadata
- Nodemon (para desenvolvimento)
- CORS (para permitir integração com o frontend)

---

## ▶️ Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/IgorSasaki/todo-list-mb-api.git
cd todo-list-mb-api
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação com:

```bash
npm run dev
```

A API estará disponível em:  
🔗 `http://localhost:3333`

---

## 🔗 Rotas da API

### `GET /tasks`

- Retorna todas as tarefas cadastradas
- Exemplo:

```json
[
  {
    "id": 1,
    "title": "Estudar React",
    "description": "Entender useEffect"
  }
]
```

### `POST /tasks`

- Cria uma nova tarefa
- Enviar no corpo da requisição:

```json
{
  "title": "Nova tarefa",
  "description": "Texto da descrição"
}
```

- Retorna:

```json
{
  "id": 2,
  "title": "Nova tarefa",
  "description": "Texto da descrição"
}
```

---

## 📦 Banco de Dados

- Banco: **SQLite**
- Arquivo local: `src/database/todo.sqlite`
- Gerenciado com **TypeORM** (ORM que automatiza criação de tabelas e inserção de dados)

---

## 📎 Observações Finais

- Projeto está concluído e pode ser expandido com:
  - Rotas `PUT` e `DELETE`
  - Autenticação com JWT
  - Integração com PostgreSQL para ambientes de produção

---

## 👨‍🏫 Projeto Educacional

Este projeto foi desenvolvido como parte do curso **Programação e Novas Mídias** do programa **Mentes Brilhantes – Araraquara**, com o objetivo de ensinar os fundamentos da construção de APIs modernas com Node.js.

Professor responsável: **Igor Leonardo Sasaki da Silva Moreira**  
[LinkedIn](https://www.linkedin.com/in/igor-sasaki) • [GitHub](https://github.com/IgorSasaki)

---
