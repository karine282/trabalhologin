
create database trabalho;
use trabalho;

create table usuario(
id_usuario int primary key auto_increment,
nome varchar(200),
email varchar(200),
senha varchar(200)
);

create table adm(
  id_adm int primary key auto_increment,
  nome varchar(200),
  email varchar(200),
  senha varchar(200)
);


select * from usuario;