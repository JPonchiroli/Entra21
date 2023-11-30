/*Exercicio 1*/
create database clinicaVet;


/*Exercicio 2*/
drop table animais;
create table animais(
	id_animal int not null auto_increment,
    nome_animal varchar(45) not null,
    especie varchar(45) not null,
    primary key (id_animal)
);

/*Exercicio 3*/
drop table proprietario;
create table proprietario(
	id_proprietario int not null auto_increment,
    nome_proprietario varchar(45) not null,
    telefone varchar(45) not null,
    primary key (id_proprietario)
);

/*Exercicio 4*/
drop table consulta;
create table consulta(
	id_consulta int not null auto_increment,
    id_animal int not null,
    nome_animal varchar(45) not null,
    id_proprietario int not null,
    nome_proprietario varchar(45) not null,
    data_consulta date,
    primary key(id_consulta),
    foreign key (id_animal) references animais(id_animal),
    foreign key (id_proprietario) references proprietario(id_proprietario)
);

/*Exercicio 5*/
insert into animais (nome_animal, especie)  values
	("Max", "Boxer"),
    ("Bella", "Bulldog Francés"),
    ("Rocky", "Golden Retriever"),
    ("Daisy", "Pastor Alemão"),
    ("Luna", "Poodle");
    
/*Exercicio 6*/
insert into proprietario (nome_proprietario, telefone) values
	("Maria Garcia", "(47)97482-1953"),
    ("Carlos Rodrigues", "(47)91529-6487");
    
insert into consulta (id_animal, nome_animal, id_proprietario, nome_proprietario, data_consulta) values
	(1, "Max", 2, "Carlos Rodrigues", '2023-10-26'),
    (2, "Bella", 1, "Maria Garcia", '2023-10-27'),
    (3, "Rocky", 2, "Carlos Rodrigues", '2023-10-28'),
    (4, "Daisy", 1, "Maria Garcia", '2023-10-29'),
    (5, "Luna", 2, "Carlos Rodrigues", '2023-10-30');
    
/*Exercicio 7 CONSULTAS*/
/*Consulta 1*/
select nome_animal, nome_proprietario
from consulta;

/*Consulta 2*/
select * from consulta;

/*Consulta 3*/
select count(id_consulta)
from consulta
where data_consulta = '2023-10-27';
    
/*Consulta 4*/
select nome_animal
from animais
order by nome_animal;

/*Consulta 5*/
select * 
from consulta
order by data_consulta desc;

/*Exercicio 8*/
update animais
set nome_animal = "Tobias"
where id_animal = 1;

/*Exercicio 9*/
update proprietarios
set telefone = "(47)99685-4628"
where id_proprietario = 2;

/*Exercicio 10*/
delete from consulta
where id_consulta = 5;

select * from animais;
select * from proprietario;
select * from consulta;