var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL - AUTENTICAR");

    var instrucaoSql = `
        SELECT idUsuario, nome, email, senha
        FROM usuarios
        WHERE email = '${email}' AND senha = '${senha}';
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL - CADASTRAR");

    var instrucaoSql = `
        INSERT INTO usuarios (nome, email, senha)
        VALUES ('${nome}', '${email}', '${senha}');
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};
