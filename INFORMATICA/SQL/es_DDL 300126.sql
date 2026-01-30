create database esercitazione;

create table studente(
	matricola int primary key,
    nome varchar(16),
    cognome varchar(16),
    data_nascita int check(data_nascita >= 18),
    email varchar(30) unique
);

create table docente(
	id_docente int primary key,
    nome varchar(16),
    cognome varchar(16),
    settore 
);

create table corso(

);

create table aula(

);

create table iscrizione(

);