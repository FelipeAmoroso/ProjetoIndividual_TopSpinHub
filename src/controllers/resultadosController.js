var resultadoModel = require("../models/resultadosModel");

function salvar(req, res) {
    var fkUsuario = Number(req.body.fkUsuario);
    var fkTentativa = Number(req.body.fkTentativa);
    var acertos = Number(req.body.acertos);
    var erros = Number(req.body.erros);

    console.log("Dados recebidos:", {
        fkUsuario,
        fkTentativa,
        acertos,
        erros
    });

    if (fkUsuario == undefined || fkTentativa == undefined || acertos == undefined || erros == undefined) {
        res.status(400).send("Dados inválidos");
        return;
    }

    resultadoModel.salvar(fkUsuario, fkTentativa, acertos, erros)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log("Erro:", erro);
            res.status(500).json(erro);
        });
}

function listar(req, res) {
    var idUsuario = req.params.idUsuario;
    resultadoModel.listar(idUsuario)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro));
}

module.exports = {
    salvar,
    listar
};
