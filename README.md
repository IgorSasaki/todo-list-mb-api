# 🧠 To-Do List API – Mentes Brilhantes (MVC)

Este repositório contém a API RESTful do projeto **To-Do List** desenvolvida com **Node.js**, **Express**, **SQLite** e **TypeORM**, estruturada no padrão **MVC (Model-View-Controller)**. Este projeto faz parte do curso de backend do programa **Mentes Brilhantes**.

---

## 📁 Estrutura do Projeto (MVC)

```
src/
├── config/
│   └── data-source.js       # Configuração da conexão com o banco (Model)
├── controllers/
│   └── TaskController.js    # Lógica das requisições (Controller)
├── entities/
│   └── Task.js              # Definição da entidade Task (Model)
├── routes/
│   └── task.routes.js       # Endpoints da aplicação (View)
├── index.js                 # Arquivo principal da aplicação
```

---

## 🚀 Funcionalidades

- `GET /tasks` → Lista todas as tarefas
- `POST /tasks` → Cria uma nova tarefa

---

## 🧰 Tecnologias Utilizadas

- Node.js
- Express
- SQLite
- TypeORM
- Reflect-metadata
- Nodemon (para desenvolvimento)

---

## ▶️ Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/IgorSasaki/todo-list-mb-api.git
cd todo-list-mb-api
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o banco de dados e a aplicação com:

```bash
npm run dev
```

---

## 🔗 Rotas da API

### `GET /tasks`

- Retorna todas as tarefas cadastradas
- Exemplo de resposta:

```json
[
  {
    "id": 1,
    "title": "Estudar Node.js",
    "description": "Ler documentação do Express"
  }
]
```

### `POST /tasks`

- Cria uma nova tarefa
- Corpo da requisição (JSON):

```json
{
  "title": "Nova tarefa",
  "description": "Detalhes da tarefa"
}
```

---

## 📦 Banco de Dados

- Utiliza **SQLite** como banco leve e local
- A base `todo.sqlite` é gerada automaticamente no primeiro uso
- Gerenciado pelo **TypeORM** com sincronização automática

---

## 📎 Observações

- O projeto está organizado seguindo o padrão MVC para facilitar a separação de responsabilidades e escalabilidade.
- A persistência está em SQLite, mas pode ser trocada para MySQL ou PostgreSQL com poucas mudanças.

---

## 👨‍🏫 Projeto Educacional

Este projeto foi desenvolvido no contexto do curso de backend do programa **Mentes Brilhantes**, com o objetivo de ensinar arquitetura de APIs e boas práticas com Node.js.

---
