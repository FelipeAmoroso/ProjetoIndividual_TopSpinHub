var resultadoModel = require("../models/resultadosModel");

function salvar(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var acertos = req.body.acertos;
    var erros = req.body.erros;

    resultadoModel.salvar(fkUsuario, acertos, erros)
        .then(() => {
            res.status(200).send("Resultado salvo");
        })
        .catch(function (erro) {
            res.status(500).json(erro);
        });
}

function listar(req, res) {
    var idUsuario = req.params.idUsuario;

    resultadoModel.listar(idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            res.status(500).json(erro);
        });
}

module.exports = {
    salvar,
    listar
};