var database = require("../database/config");

function criarTentativa(fkUsuario) {
    var instrucao = `
        INSERT INTO tentativas (fkUsuario)
        VALUES (${fkUsuario});
    `;
    return database.executar(instrucao);
}

module.exports = {
    criarTentativa
};