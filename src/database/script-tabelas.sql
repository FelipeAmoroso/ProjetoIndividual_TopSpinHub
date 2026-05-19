-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
CREATE DATABASE topspinhub;
USE topspinhub;
 
CREATE TABLE usuarios (
    idUsuario   INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(50) NOT NULL
);
 
CREATE TABLE tentativas (
    idTentativa INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT NOT NULL,
    data_tentativa DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES usuarios(idUsuario)
);
 
CREATE TABLE resultados (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT NOT NULL,
    fkTentativa INT NOT NULL,
    acertos INT NOT NULL DEFAULT 0,
    erros INT NOT NULL DEFAULT 0,
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario)   REFERENCES usuarios(idUsuario),
    FOREIGN KEY (fkTentativa) REFERENCES tentativas(idTentativa)
);
 

SELECT * FROM usuarios;
SELECT * FROM tentativas;
SELECT * FROM resultados;
 

SELECT
    u.nome, r.acertos, r.erros, t.data_tentativa
FROM usuarios u
JOIN resultados  r ON r.fkUsuario   = u.idUsuario
JOIN tentativas t ON r.fkTentativa = t.idTentativa;
