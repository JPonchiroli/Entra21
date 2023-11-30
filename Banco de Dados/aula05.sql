create database entra21;

drop table usuarios;
create table usuarios(
	id_usuario int auto_increment,
    nome_usuario varchar(45),
    email_usuario varchar(45),
    primary key (id_usuario)
);


insert into usuarios (nome_usuario, email_usuario) values 
	('joao', 'joao@gmail.com'),
    ('fabio', 'fabio@gmail.com'),
    ('marcos', 'marcos@gmail.com');
    
DELIMITER //
	create procedure showUsers(in cadastro_id int )
	begin 
		select * from usuarios
        where id_usuario = cadastro_id;
    end;
DELIMITER;
