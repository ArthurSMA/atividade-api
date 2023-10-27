const data = require("../data/usuario.json");
const notification = require("../notification/usuarioNotification");

const cadastrarUsuario = (req, res) => {
    const novoUsuario = req.body;
 
    data.usuarios.push(novoUsuario);

    novoUsuario
        ? res.status(201).json(novoUsuario)
        : res.json(notification.invalido);

    res.json({ msg: "Erro ao tentar acessar o servidor!" });
};

const buscarUsuarios = (req, res) => {
    data.usuarios
        ? res.status(200).json(data.usuarios)
        : res.status(404).json(notification.naoEncontrado);
};

const buscarUsuariosPorID = (req, res) => {
    const usuarioId = parseInt(req.params.id);
    const usuario = data.usuarios.find((item) => item.id === usuarioId);

    usuario
        ? res.status(200).json(usuario)
        : res.status(404).json(notification.naoEncontrado);

    res.json({ msg: "Erro ao tentar acessar o servidor!" });
};

const editarUsuario = (req, res) => {
    const usuarioId = parseInt(req.params.id);
    const novoUsuarioIndex = req.body;
    const usuarioIndex = data.usuarios.findIndex(
        (item) => item.id === usuarioId
    );

    if (usuarioIndex === -1) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
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
        return res.status(404).json({ msg: "Usuário não encontrados" });
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
