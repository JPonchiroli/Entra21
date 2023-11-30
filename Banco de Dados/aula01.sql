create database entra21;
create user ent21 identified by "ent21";
grant all privileges on entra21.* to ent21;
select * from mysql.user;