var database = require("../database/config");

function salvar(fkUsuario, acertos, erros) {
    var instrucao = `
        INSERT INTO resultado (fkUsuario, acertos, erros)
        VALUES (${fkUsuario}, ${acertos}, ${erros});
    `;
    return database.executar(instrucao);
}

function listar(idUsuario) {
    var instrucao = `
        SELECT * FROM resultado
        WHERE fkUsuario = ${idUsuario}
        ORDER BY dataHora;
    `;
    return database.executar(instrucao);
}

module.exports = {
    salvar,
    listar
};