const express = require('express');
const app = express();
const port = 9090;

app.use(express.json());

const usuarioController = require('./src/controllers/usuarioController');

app.post('/api/usuarios', usuarioController.cadastrarUsuario);
app.get('/api/usuarios', usuarioController.buscarUsuarios);
app.get('/api/usuarios/:id', usuarioController.buscarUsuariosPorID);
app.put('/api/usuarios/:id', usuarioController.editarUsuario);
app.delete('/api/usuarios/:id', usuarioController.deletarUsuario);

app.listen(port, () => {
    console.log(`Servidor sendo utilizado na porta ${port}`)
})