
drop database if exists bd_benergy_p5;
CREATE DATABASE BD_BENERGY_P5;

USE BD_BENERGY_P5;


CREATE TABLE Materiais(
	IDMaterial int primary key not null auto_increment,
    nome varchar(255),
    descricao varchar(255),
    datacompra date,
   quantidade int,
    sistema varchar(255),
    massa int,
    custo int,
    unidadedemedida int,
    comp varchar(255)

);


CREATE TABLE Carros(
	IDCarro int primary key not null,
	descricaoCarro varchar(100)

);

CREATE TABLE Armazemm(
	IDArmazem int primary key not null,
	Prateleira varchar(30)

);

CREATE TABLE Composicao(
	IDComposicao int primary key not null,
	itemPaiComposicao int not null,
	itemFilhoComposicao int not null,
	constraint PKMaterialPai foreign key (itemPaiComposicao ) references Materiais (IDMaterial),
	constraint PKMaterialFilho foreign key (itemFilhoComposicao) references Materiais (IDMaterial)

);

CREATE TABLE Materiais_v_Carro(
	IDm_v_c int primary key not null
);

CREATE TABLE Materiais_v_Armazem(
	IDm_v_a int primary key not null
);
INSERT INTO Materiais (nome, descricao, datacompra, quantidade, sistema, massa, custo, unidadedemedida, comp) 
VALUES ('Ferrinho',  'pequeno', '1995-08-10', 5, 'mechanics', 35, 15, 35, 'ferrionho');
DELETE FROM Materiais WHERE nome = 'Ferrinho';
select * from Materiais;
