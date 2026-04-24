create database prova;

create table cellulare(
	cod int primary key,
    marca varchar(20),
    modello varchar(10),
    numero int
);

create table persona(
	cf varchar(16) primary key,
    nome varchar(20),
    cognome varchar(20),
    codCell int,
    constraint fk_persona_cellulare foreign key (codCell) references cellulare(cod)
);

