## AS TRÊS LINHAS Á SEGUIR DEVEM SER EXECUTADAS NO USUÁRIO ROOT
create database calcados;
create user tst identified by "tst";
grant all privileges on calcados.* to tst;

## A PARTIR DAQUI TEM QUE EXECUTAR DENTRO DO DATABASE 'TST'
CREATE TABLE Cliente  (
   cpfcliente    VARCHAR(11) NOT NULL,
   nomecliente   VARCHAR(45) NOT NULL,
   emailcliente  VARCHAR(60) NOT NULL,
   senhacliente  VARCHAR(16) NOT NULL,
  PRIMARY KEY (cpfcliente));

CREATE TABLE Produto  (
   idProduto     INTEGER      AUTO_INCREMENT,
   descproduto   VARCHAR(45)  NOT NULL,
   idtamanho     INTEGER      NOT NULL,
   idcor         INTEGER      NOT NULL,
   idmarca       INTEGER      NOT NULL,
   valorproduto  DECIMAL(8,2) NOT NULL,
  PRIMARY KEY ( idProduto));
  
CREATE TABLE Tamanho  (
   idtamanho     INTEGER     AUTO_INCREMENT,
   desctamanho   VARCHAR(20) NOT NULL,
  PRIMARY KEY ( idtamanho ));

CREATE TABLE Cor  (
   idcor         INTEGER     AUTO_INCREMENT,
   desccor       VARCHAR(20) NOT NULL,
  PRIMARY KEY ( idcor ));

CREATE TABLE Marca  (
   idmarca        INTEGER AUTO_INCREMENT,
   descmarca      VARCHAR(30) NOT NULL,
  PRIMARY KEY ( idmarca ));

CREATE TABLE Venda  (
   nrnotafiscal   INTEGER AUTO_INCREMENT,
   cpfcliente     VARCHAR(11) NOT NULL,
   datavenda      DATE NOT NULL,
   tipopagamento  INTEGER NOT NULL,
   vlrtotal       DECIMAL(9,2) NOT NULL,
   Cliente_cpfcliente       VARCHAR(11) NOT NULL,
   ItensVenda_nnotafiscal   INTEGER NOT NULL,
  PRIMARY KEY (nrnotafiscal));
  
CREATE TABLE ItensVenda  (
   nnotafiscal   INTEGER NOT NULL,
   idproduto     INTEGER NOT NULL,
   qtdproduto    INTEGER NOT NULL,
  PRIMARY KEY ( nnotafiscal ));