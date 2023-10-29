const express = require("express");
const cors = require("cors");

const port = 9090;
const app = express();

app.use(express.json());
app.use(cors());

const usuarioRoutes = require("./src/routes/usuarioRoutes");
app.use("/api/usuarios", usuarioRoutes);

app.listen(port, () => {
    console.log(`Servidor sendo utilizado na porta ${port}`);
});
