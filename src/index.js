const express = require("express");

const app = express();
const PORT = 3333;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API rodando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
