const express = require("express");
const cors = require("cors");
const { AppDataSource } = require("./config/data-source");
const taskRoutes = require("./routes/task.routes");

require("reflect-metadata");

const app = express();
const PORT = 3333;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Banco de dados conectado!");

    app.use("/", taskRoutes);

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco:", err);
  });
