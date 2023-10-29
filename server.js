const express = require("express");
const cors = require("cors");
const usuarioRoutes = require("./src/routes/usuarioRoutes");

const app = express();
const port = process.env.PORT || 9090;

app.use(express.json());
app.use(cors());

app.use("/api/usuarios", usuarioRoutes);

app.listen(port, () => {
  console.log(`Servidor sendo utilizado na porta ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Erro interno do servidor");
});
