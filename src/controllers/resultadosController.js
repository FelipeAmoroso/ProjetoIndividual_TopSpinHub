var resultadoModel = require("../models/resultadosModel");

function salvar(req, res) {
    var fkUsuario = req.body.fkUsuario;
    var fkTentativa = req.body.fkTentativa; 
    var acertos = req.body.acertos;
    var erros = req.body.erros;

 
    console.log("Dados recebidos no controller:", {
        fkUsuario,
        fkTentativa,
        acertos,
        erros
    });

    if (fkUsuario == undefined || fkTentativa == undefined) {
        res.status(400).send("Dados inválidos (fkUsuario ou fkTentativa undefined)");
        return;
    }

    resultadoModel.salvar(fkUsuario, fkTentativa, acertos, erros)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao salvar resultado:", erro);
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
            console.log("Erro ao listar:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    salvar,
    listar
};
