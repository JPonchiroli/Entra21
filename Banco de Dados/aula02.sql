drop table aeronave;
create table aeronave(
	codAeronave    int auto_increment,
    modeloAeronave varchar(20) not null,
    fabricante     varchar(20) not null,
	nomeEmpresa    varchar(30) not null,
    nomePaisEmp    varchar(30) not null,
    primary key (codAeronave)
);

INSERT INTO entra21.aeronave (modeloAeronave, fabricante, nomeEmpresa, nomePaisEmp) VALUES
	 ('Airbus A330','Airbus','TAM','Brasil'),
	 ('EMB195 B1','Embraer','Azul','Brasil'),
	 ('Airbus A380','Airbus','Emirates','Arabia Saudita'),
	 ('Boeing 737-800 MAX','Boeing','American Arilines','Estados Unidos'),
	 ('Boeing 747-700','Boeing','PanAM','Estados Unidos'),
	 ('Boeing 747-700','Boeing','United Airlines','Estados Unidos'),
	 ('Boeing 777-300ER','Boeing','Japan Airlines','Japão'),
	 ('Boeing 777-300ER','Boeing','FAB','Brasil');

select * from aeronave;


select modeloAeronave, fabricante, nomeEmpresa
from aeronave
where aeronave.nomePaisEmp = 'Brasil'
order by nomeEmpresa;

select modeloAeronave, fabricante, nomeEmpresa
from aeronave
where modeloAeronave LIKE '%ER%';

update aeronave
set nomeEmpresa = 'American Airlines'
where codAeronave in (6,7);

create table cliente(
	cpfCliente   varchar(11)   not null,
    nomeCLiente  varchar(40)  not null,
    emailCliente varchar(60) not null,
    primary key (cpfCliente)
);

insert into cliente values
	('222222222', 'Maria Debunha', 'mariDB@gmail.com');
    
    
select * from cliente;

create table reservas(
	numReserva  integer auto_increment,
    cpfCliente  varchar(11) not null,
    codAeronave integer     not null,
    dataReserva date        not null,
    primary key (numReserva)
);

insert into reservas(cpfCliente, codAeronave, dataReserva) values
	('222222222', '4', '2023-10-24');

select * from reservas;

create table situacaoVoo(
	codAeronave integer    not null,
    situacao    char(01)   not null,
    primary key (codAeronave)
);
