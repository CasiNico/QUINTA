const app = require('express')

let server = app();



let clienti = [
    { id: 1, nome: 'Han Solo', specie: 'umano', credito: 1500 },
    { id: 2, nome: 'Greedo', specie: 'rodiano', credito: 300 },
    { id: 3, nome: 'Chewbacca', specie: 'wookiee', credito: 900 },
    { id: 4, nome: 'Hammerhead', specie: 'ithoriano', credito: 200 }
];


//https://starwars.fandom.com/wiki/Spotchka
let bevande = [
    { id: 1, nome: 'Corellian Ale', prezzo: 50, gradazione: 8 },
    { id: 2, nome: 'Juri Juice', prezzo: 80, gradazione: 15 },
    { id: 3, nome: 'Spotchka', prezzo: 120, gradazione: 20 },
    { id: 4, nome: 'Merenzane Gold', prezzo: 200, gradazione: 5 }
];

let ordini = [];

let taglie = [];

let missioni = [
    {
        id: 1,
        codice: 'AURORA-1',
        descrizione: 'Recupero piani della Morte Nera',
        pianeta: 'Scarif',
        rischio: 'alto',
        clearance: 3,
        agente: 'Cassian Andor'
    },
    {
        id: 2,
        codice: 'NEBULA-4',
        descrizione: 'Sorveglianza porto di Mos Eisley',
        pianeta: 'Tatooine',
        rischio: 'basso',
        clearance: 1,
        agente: 'Fulcrum'
    },
    {
        id: 3,
        codice: 'ECLIPSE-7',
        descrizione: 'Sabotaggio generatori imperiali',
        pianeta: 'Lothal',
        rischio: 'alto',
        clearance: 2,
        agente: 'Hera Syndulla'
    },
    {
        id: 4,
        codice: 'PHANTOM-2',
        descrizione: 'Estrazione agente sotto copertura',
        pianeta: 'Coruscant',
        rischio: 'critico',
        clearance: 3,
        agente: 'Sconosciuto'
    }
];

// app.use()


server.listen(3000, () => {console.log("servizio aperto sulla porta 3000")});
