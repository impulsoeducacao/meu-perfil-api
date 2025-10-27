const express = require("express");
const app = express();
const perfilRoutes = require("./src/routes/perfilRoutes");
const sequelize = require("./src/config/database");
const cors = require("cors");

// Middleware
app.use(express.json());

// Routes com prefixo /api
app.use("/api", perfilRoutes);

app.use(cors());

// Test DB Connection
sequelize
  .authenticate()
  .then(() => {
    console.log("💾 Conexão com o banco estabelecida!");
    app.listen(3000, () =>
      console.log("🚀 Servidor rodando em localhost:3000/api/perfis"),
    );
  })
  .catch((err) => console.error("Erro ao conectar com o banco:", err));