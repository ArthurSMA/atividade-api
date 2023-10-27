const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.buscarUsuarios);
router.get("/:id", usuarioController.buscarUsuariosPorID);
router.post("/", usuarioController.cadastrarUsuario);
router.put("/:id", usuarioController.editarUsuario);
router.delete("/:id", usuarioController.deletarUsuario);

module.exports = router;
