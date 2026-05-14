var express = require("express");
var router = express.Router();
var resultadoController = require("../controllers/resultadosController");

router.post("/salvar", resultadoController.salvar);
router.get("/listar/:idUsuario", resultadoController.listar);

module.exports = router;