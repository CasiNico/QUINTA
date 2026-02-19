create database  biblioteca;

create table biblioteca.utente(
	id_utente int primary key,
    nome varchar(10) not null,
    cognome varchar(10) not null,
	email varchar(50) not null unique,
    eta int check (eta >= 14) 
);

create table biblioteca.libro(
	id_libro int primary key,
    titolo varchar(50) not null,
    autore varchar(50) not null,
    isbn varchar(50) not null unique,
    anno_pubblicazione date not null check(anno_pubblicazione >= '1500-01-01') 
    /*
    date -> anno-mese-giorno -> tra gli apici
    */
);

create table biblioteca.prestiti (
	id_prestito int primary key,
    id_utente int,
    id_libro int,
    data_prestito date not null,
    data_restituzione date,
    constraint fk_prestiti_utente foreign key (id_utente) references utente(id_utente),
    constraint fk_prestiti_libro foreign key (id_libro) references libro(id_libro)
);