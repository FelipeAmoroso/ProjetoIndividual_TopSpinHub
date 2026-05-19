var database = require("../database/config");

function salvar(fkUsuario, fkTentativa, acertos, erros) {

    var instrucao = `
        INSERT INTO resultados (fkUsuario, fkTentativa, acertos, erros, dataHora)
        VALUES (${fkUsuario}, ${fkTentativa}, ${acertos}, ${erros}, NOW());
    `;

    console.log("SQL:", instrucao);

    return database.executar(instrucao);
}

function listar(idUsuario) {

    var instrucao = `
        SELECT 
            u.nome,
            r.acertos,
            r.erros,
            t.data_tentativa
        FROM usuarios u
        JOIN resultados r ON r.fkUsuario = u.idUsuario
        JOIN tentativas t ON r.fkTentativa = t.idTentativa
        WHERE u.idUsuario = ${idUsuario}
        ORDER BY t.data_tentativa DESC;
    `;

    console.log("SQL:", instrucao);

    return database.executar(instrucao);
}

module.exports = {
    salvar,
    listar
};
