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
    data_restituzione date not null,
    constraint fk_prestiti_utente foreign key (id_utente) references utente(id_utente),
    constraint fk_prestiti_libro foreign key (id_libro) references libro(id_libro)
);

insert into biblioteca.utente (id_utente, nome, cognome, email, eta)
values (11, 'nicolò', 'casiraghi', 'nc2@gmail.com', 18);

insert into biblioteca.libro (id_libro, titolo, autore, isbn, anno_pubblicazione)
values (12, 'I fratelli Karamazov', 'Fedor Dostoevsky', 'A123B2', '1880-11-01');

insert into biblioteca.prestiti (id_prestito, id_utente, id_libro, data_prestito, data_restituzione) 
values (132, '11', '12', '2026-02-05', '2026-03-05');

insert into biblioteca.utente values (6, 'nico2', 'casi2', 'nc3@prova.it', 13);
/*
non funziona, da errore xché eta <14
*/

insert into biblioteca.utente values (6, 'nico2', 'casi2', 'nc3@prova.it', 14);

insert into biblioteca.libro (id_libro, titolo, autore, isbn, anno_pubblicazione)
values (13, 'Delitto e Castigo', 'Fedor Dostoevsky', 'A123B2', '1499-11-01');

insert into biblioteca.prestiti (id_prestito, id_utente, id_libro, data_prestito, data_restituzione) 
values (132, '11', '12', '2026-02-05', '2026-03-05');
