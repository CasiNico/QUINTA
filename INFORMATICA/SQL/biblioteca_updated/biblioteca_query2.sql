select * from biblioteca.utente where eta > 25;

select * from biblioteca.utente where nome like 'F%';

select * from biblioteca.utente where email like '%gmail%';

select * from biblioteca.utente where cognome like '%lli';

select * from biblioteca.utente
where eta between 18 and 30;

select distinct autore
from biblioteca.libro;

select * from biblioteca.libro where titolo like '&amore&';

select * from biblioteca.libro where anno_pubblicazione 
between '1500-01-01' and '1700-01-01'; 

select * from biblioteca.libro where isbn is not null;

select * from bibliotec.prestiti where data_restituzione is null;

select * from biblioteca.prestiti where data_prestito
between '2024-01-01' and '2024-12-31';

/*
	da aggingere quelli col join
*/

