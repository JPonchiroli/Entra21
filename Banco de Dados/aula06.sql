select * from produtos;
select * from entradas_estoque;
select * from saidas_estoque;

create table produtos( 
    id_produto int auto_increment,
    nome_produto varchar(45) not null,
    descricao_produto varchar(45) not null,
    preco_unitario decimal(10, 2),
    primary key(id_produto)
);

insert into produtos (nome_produto, descricao_produto, preco_unitario) values 
    ('Meia Soquete Masculina', 'Tam. 39 a 41', 7),
    ('Meia Soquete Feminina', 'Tam. 34 a 39', 7),
    ('Meia Soquete Infantil', 'Tam. P 23 a 26', 5),
    ('Meia Soquete Infantil', 'Tam. M 27 a 30', 5),
    ('Meia Soquete Infantil', 'Tam. G 31 a 34', 5),
    ('Meia Sapatilha Invisível Masculina', 'Tam. 39 a 41', 6),
    ('Meia Sapatilha Invisível Feminina', 'Tam. 34 a 39', 6),
    ('Meia Sapatilha Invisível Infantil', 'Tam. P 23 a 26', 4.5),
    ('Meia Sapatilha Invisível Infantil', 'Tam. M 27 a 30', 4.5),
    ('Meia Sapatilha Invisível Infantil', 'Tam. G 31 a 34', 4.5);

select nome_produto, preco_unitario
from produtos
where preco_unitario = 7;

select nome_produto, preco_unitario
from produtos
where preco_unitario <> 10;

select nome_produto, preco_unitario
from produtos
where preco_unitario < 8;

select nome_produto, preco_unitario
from produtos
where preco_unitario >= 8;

select nome_produto, preco_unitario
from produtos
where preco_unitario in (1, 5);

select nome_produto, preco_unitario
from produtos
where preco_unitario not in (1, 5);

select nome_produto, preco_unitario
from produtos
where nome_produto like 'Meia Cano%';

select nome_produto, preco_unitario
from produtos
where nome_produto not like 'Meia Cano%';

select nome_produto, preco_unitario
from produtos
where preco_unitario between 4 and 6;

select nome_produto, preco_unitario
from produtos
where nome_produto is not null;

select concat('Ola', ' ', 'Mundo') as 'Boas Vindas';

select length('Mysql') as Comprimento;

select upper('mysql') as Maiusculas, lower('mysql') as minusculas;

select substring('MySQL', 1, 3) as Substr;