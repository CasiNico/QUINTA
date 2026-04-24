create database inserisciUtente;

create table inserisciUtente.utente (
	id_utente varchar (50) primary key not null,
    nome varchar (50) not null,
    cognome varchar (50) not null,
    email varchar(50) not null,
    età int not null 
);