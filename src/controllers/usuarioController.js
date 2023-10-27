const data = require("../data/usuario.json");

const cadastrarUsuario = (req, res) => {
    const novoUsuario = req.body;

    data.usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
};

const buscarUsuarios = (req, res) => {
    if (!data.usuarios) {
        res.status(404).json({ msg: "Dados não encontrados" });
    }

    res.json(data.usuarios);
};

const buscarUsuariosPorID = (req, res) => {
    const usuarioId = parseInt(req.params.id);
    const usuario = data.usuarios.find((item) => item.id === usuarioId);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ messangem: "Dado não encontrado" });
    }
};

const editarUsuario = (req, res) => {
    const usuarioId = parseInt(req.params.id);
    const novoUsuarioIndex = req.body;
    const usuarioIndex = data.usuarios.findIndex(
        (item) => item.id === usuarioId
    );

    if (!usuarioIndex) {
        return res.status(404).json({ msg: "Usuario não encontrado" });
    }

    data.usuarios[usuarioIndex] = {
        ...data.usuarios[usuarioIndex],
        ...novoUsuarioIndex,
    };

    res.json(data.usuarios[usuarioIndex]);
};

const deletarUsuario = (req, res) => {
    const usuarioId = parseInt(req.params.id);
    const usuario = data.usuarios.findIndex((item) => item.id === usuarioId);

    if (usuario === -1) {
        return res.status(404).json({ msg: "não foi possível encontrar" });
    }

    data.usuarios.splice(usuario, 1);

    res.status(204).send();
};

module.exports = {
    cadastrarUsuario,
    buscarUsuarios,
    buscarUsuariosPorID,
    editarUsuario,
    deletarUsuario,
};
