# 📘 To-Do List API – Mentes Brilhantes (Etapa 1)

Este repositório contém a base inicial de uma API REST utilizando **Node.js** e **Express.js** para o gerenciamento de tarefas. Esta é a **Etapa 1** do projeto desenvolvido com os alunos do programa **Mentes Brilhantes**.

---

## 🚀 O que foi implementado até agora

- Configuração do projeto com Node.js e Express
- Criação de um servidor básico
- Implementação da primeira rota `GET /`
- Resposta simples confirmando que a API está rodando

---

## 📁 Estrutura atual do projeto

```
todo-list-mb-api/
├── node_modules/
├── src/
│   └── index.js          # Arquivo principal do servidor
├── package.json
└── README.md
```

---

## 📦 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

---

## ▶️ Como executar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/todo-list-mb-api.git
cd todo-list-mb-api
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Execute o servidor:**

```bash
node src/index.js
```

4. **Abra no navegador ou use o Postman para testar:**

```
GET http://localhost:3333/
```

Você verá a mensagem:

```
API rodando!
```

---

## 🧠 Conceitos aprendidos até aqui

- O que é o **Express** e por que usamos ele para criar APIs
- Como iniciar um servidor com `express()` e `app.listen()`
- O que é uma rota HTTP
- O que é um middleware e como `express.json()` permite ler `req.body`
- Diferença entre frontend e backend

---

## 📎 Próximos passos

- Criar rota `POST /tasks` para adicionar novas tarefas
- Armazenar tarefas em memória com um array
- Listar tarefas com `GET /tasks`
- Trabalhar com `req.body` e códigos de status HTTP

---

## 👨‍🏫 Projeto Educacional

Este projeto foi desenvolvido para ensinar fundamentos de backend com Node.js dentro do programa **Mentes Brilhantes**, com foco em jovens iniciantes no mundo da programação.

---
