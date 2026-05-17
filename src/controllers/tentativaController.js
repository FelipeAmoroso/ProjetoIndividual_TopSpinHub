var tentativaModel = require("../models/tentativaModel");

function criar(req, res) {
    var fkUsuario = req.body.fkUsuario;

    tentativaModel.criarTentativa(fkUsuario)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            res.status(500).json(erro);
        });
}

module.exports = {
    criar
};