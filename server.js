const express = require("express");
const app = express();
const port = 9090;

app.use(express.json());

const usuarioRoutes = require("./src/routes/usuarioRoutes");
app.use("/api/usuarios", usuarioRoutes);

app.listen(port, () => {
    console.log(`Servidor sendo utilizado na porta ${port}`);
});
