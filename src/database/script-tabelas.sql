-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

USE topspinhub;
 
CREATE TABLE usuario (
    idUsuario   INT PRIMARY KEY AUTO_INCREMENT,
    nome        VARCHAR(50) NOT NULL,
    email       VARCHAR(50) NOT NULL UNIQUE,
    senha       VARCHAR(50) NOT NULL
);
 
CREATE TABLE tentativas (
    idTentativa    INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario      INT NOT NULL,
    data_tentativa DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);
 
CREATE TABLE resultado (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario   INT NOT NULL,
    fkTentativa INT NOT NULL,
    acertos     INT NOT NULL DEFAULT 0,
    erros       INT NOT NULL DEFAULT 0,
    dataHora    DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario)   REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkTentativa) REFERENCES tentativas(idTentativa)
);
 

SELECT * FROM usuario;
SELECT * FROM tentativas;
SELECT * FROM resultado;
 

SELECT
    u.nome, r.acertos, r.erros, t.data_tentativa
FROM usuario u
JOIN resultado  r ON r.fkUsuario   = u.idUsuario
JOIN tentativas t ON r.fkTentativa = t.idTentativa;
