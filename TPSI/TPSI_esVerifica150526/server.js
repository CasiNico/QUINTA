const express = require('express') // import libreria

const PORT = 3000;

// creo il server
const server = express(); 

server.use(express.json())

let clienti = [
    { id: 1, nome: 'Han Solo', specie: 'umano', credito: 1500 },
    { id: 2, nome: 'Greedo', specie: 'rodiano', credito: 300 },
    { id: 3, nome: 'Chewbacca', specie: 'wookiee', credito: 900 },
    { id: 4, nome: 'Hammerhead', specie: 'ithoriano', credito: 200 }
];

let bevande = [
    { id: 1, nome: 'Corellian Ale', prezzo: 50, gradazione: 8 },
    { id: 2, nome: 'Juri Juice', prezzo: 80, gradazione: 15 },
    { id: 3, nome: 'Spotchka', prezzo: 120, gradazione: 20 },
    { id: 4, nome: 'Merenzane Gold', prezzo: 200, gradazione: 5 }
];

let ordini = [
    { id: 1, cliente: 'Han Solo',   bevanda: 'Corellian Ale',  quantita: 2, costo_base: 100, maggiorazione: 0,  costo_totale: 100, credito_rimasto: 1400 },
    { id: 2, cliente: 'Greedo',     bevanda: 'Juri Juice',     quantita: 1, costo_base: 80,  maggiorazione: 10, costo_totale: 90,  credito_rimasto: 210  },
    { id: 3, cliente: 'Chewbacca',  bevanda: 'Spotchka',       quantita: 3, costo_base: 360, maggiorazione: 0,  costo_totale: 360, credito_rimasto: 540  },
    { id: 4, cliente: 'Hammerhead', bevanda: 'Merenzane Gold',  quantita: 1, costo_base: 200, maggiorazione: 20, costo_totale: 220, credito_rimasto: 0    },
    { id: 5, cliente: 'Han Solo',   bevanda: 'Spotchka',       quantita: 1, costo_base: 120, maggiorazione: 0,  costo_totale: 120, credito_rimasto: 1280 },
    { id: 6, cliente: 'Greedo',     bevanda: 'Corellian Ale',  quantita: 2, costo_base: 100, maggiorazione: 10, costo_totale: 110, credito_rimasto: 100  }
];

let missioni = [
    { id: 3, codice: 'ECLIPSE-7', descrizione: 'Sabotaggio generatori imperiali', pianeta: 'Lothal', rischio: 'alto', clearance: 2, agente: 'Hera Syndulla' },
    { id: 1, codice: 'MM', descrizione: 'Sabotaggio Via Marzabotto', pianeta: 'Sesto San Giovanni', rischio: 'altissimissimo', clearance: 1, agente: 'Daniele Marinaro' },
    { id: 4, codice: 'PHANTOM-2', descrizione: 'Estrazione agente sotto copertura', pianeta: 'Coruscant', rischio: 'critico', clearance: 3, agente: 'Sconosciuto' }
];

// logger
server.use((req, res, next) => {
    console.log("[GL.MW] " + req.method + " - " + req.url);
    next();
})

// endpoint precedenti, ricopiati

server.use("/clienti", (req, res, next) => {
    //controlla se header custom esiste
    //prendo un header
    const tessera = req.headers["x-tessera"]

    // ma davvero sto controllando quello che voglio...?
    if (!tessera) {
        //Possibile 403...
        return res.status(400).json({ err: " niente tessera, niente ingresso." })
    }

    next()
})

server.use("/clienti", (req, res, next) => {
    // leggere x-gettoni 
    const gettoni = parseInt(req.headers["x-gettoni"])

    // se esiste (sto controllando davvero l'esistenza?) associa il valore in req.campo
    if (gettoni) {
        req.gettoni = gettoni
    } else {
        req.gettoni = 0;
    }

    console.log(req.gettoni);

    next();
})

server.get("/clienti", (req, res) => {
    res.status(200).json(clienti)
})

//Route - rotta: gestita dal route handler
server.get("/clienti/:id", (req, res) => {
    let idCliente = parseInt(req.params.id);
    //TODO (tu-dù): Check se id è davvero un numero intero
    //TODO: ricerca se ho davvero quel cliente
    for (let cliente of clienti) {
        if (cliente.id === idCliente) {
            return res.status(200).json(cliente);
        }
    }

    return res.status(404).json({ "msg": "Cliente non trovato" })
})

server.post("/clienti", (req, res) => {
    let name = req.body.nome;
    //se ci sono più campi devo controllarli tutti

    if (!name) return res.status(400).json({ "msg": "errore client" })
    clienti.push({
        id: clienti.length,
        nome: name
    })
})

// endpoint 1

server.use('/bevande', (req, res, next) => {
    let GradMaxHeader = req.headers['x-gradazione-max'];
    let numGradMaxHeader = parseInt(GradMaxHeader);

    if(isNaN(numGradMaxHeader)) {
        req.gradazioneMax = null;
    } else {
        req.gradazioneMax = numGradMaxHeader;
    }
    next();
})

server.get('/bevande', (req, res) => {
    if (req.gradazioneMax === null) {
        return res.status(200).json(bevande);
    } else {
        let newBevande = []
        for (const bevanda of bevande) {
            if(bevanda.gradazione <= req.gradazioneMax) {
                newBevande.push(bevanda)
            }
        }
        return res.status(200).json(newBevande)
    }
})

// endpoint 2

server.use('/clienti', (req, res, next) => {
    const ruolo = req.headers['x-ruolo']
    if(!ruolo) {
        req.ruolo = 'ospite';
    } else {
        req.ruolo = ruolo;
    }
    next()
})

server.get('/clienti/:id/ordini', (req, res) => {
    // verifico che l'id sia un intero valido
    const idReq = parseInt(req.params.id);
    if (isNaN(idReq)) {
        return res.status(400).json({ errore: 'Id non valido'})
    }    
    let nomeCliente = "";
    let esisteCliente = false;
    for (const cliente of clienti) {
        if(cliente.id === idReq) {
            esisteCliente = true;
            nomeCliente = cliente.nome;
        }
    }
    if (!esisteCliente) {
        return res.status(404).json({ errore: 'Cliente non trovato'})
    }
    let OrdiniByClienti = [];
    for (const ordine of ordini) {
        if (ordine.cliente === nomeCliente) {
            OrdiniByClienti.push(ordine)
        }
    }
    if(req.ruolo === 'admin') {
        return res.json(OrdiniByClienti)
    } else {
        let newOrdiniByCliente = [];
        for (const o of OrdiniByClienti) {
            const ordine = {
                id: o.id,
                cliente: o.cliente,
                bevanda: o.bevanda,
                quantita: o.quantita,
                costo_base: o.costo_base,
                maggiorazione: o.maggiorazione,
                credito_rimasto: o.credito_rimasto
            };
            newOrdiniByCliente.push(ordine);
        }
        return res.json(newOrdiniByCliente);
    }
})

// endpoint 3 - non fattibile (mancano parti)

/*
server.get('/clienti/:id/riepilogo', (req, res) => {

    let nomeCliente;
    let credito_attuale;
    let numero_ordini;
    let totale_speso;
    let bevanda_preferita;
    let taglie_attive;

    // cerco se il cliente esiste e recupero il nome
    const idReq = parseInt(req.params.id);
    if (isNaN(idReq)) {
        return res.status(400).json({ errore: 'Id non valido'})
    }
    let esisteCliente = false;
    for (const cliente of clienti) {
        if(cliente.id === idReq) {
            esisteCliente = true;
            nomeCliente = cliente.nome;

        }
    }
    if (!esisteCliente) {
        return res.status(404).json({ errore: 'Cliente non trovato'})
    }

})


*/

// endpoint 4 & 5

// middleware 1
server.use('/missioni', (req, res, next) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ messaggio: "Metodo non consentito. Le missioni non si toccano"});
    }
    next();
})

// middleware 2
server.use('/missioni', (req, res, next) => {
    const h = req.headers['x-clearance'];
    const numH = parseInt(h);
    if (isNaN(numH)) {
        req.clearance = 0;
    } else {
        req.clearance = numH;
    }
    next();
})

// middleware 3
server.use('/missioni', (req, res, next) => {
    let missioniFiltrate = [];
    for (const missione of missioni) {
        if (missione.clearance <= req.clearance) {
            missioniFiltrate.push(missione);
        }
    }
    req.missioniVisibili = missioniFiltrate;
    next();
})

server.get('/missioni', (req, res) => {
    const missioniVisibili = req.missioniVisibili;
    const clearance = req.clearance;
    if (clearance === 0) {
        return res.status(403).json({messaggio: 'Clearance insufficiente. Non sai niente'});
    }
    if (clearance === 1 || clearance === 2) {
        let newMissioniVisibili = []
        for(const m of missioniVisibili) {
            const missione = {
                id: m.id,
                codice: m.codice,
                descrizione: m.descrizione,
                pianeta: m.pianeta,
                rischio: m.rischio,
                clearance: m.clearance,
                agente: '[CLASSIFICATO]'
            };
            newMissioniVisibili.push(missione);
        }
        req.missioniVisibili = newMissioniVisibili;
        return res.json(req.missioniVisibili);
    }
    if (clearance >= 3) {
        return res.json(req.missioniVisibili);
    }
})

server.get('/missioni/:id', (req, res) => {
    const missioniVisibili = req.missioniVisibili;
    const reqId = parseInt(req.params.id);
    const clearance = req.clearance;
    if (isNaN(reqId)) {
        return res.status(400).json({ errore : 'id non valido' })
    }
    if (clearance === 0) {
        return res.status(403).json({ messaggio: "Clearance insufficiente aaa"});
    }
    for (const m of missioniVisibili) {
        if (m.id === reqId) {
            if (clearance < 3) {
                const missione = {
                    id: m.id,
                    codice: m.codice,
                    descrizione: m.descrizione,
                    pianeta: m.pianeta,
                    rischio: m.rischio,
                    clearance: m.clearance,
                    agente: '[CLASSIFICATO]'
                };
                return res.json(missione);
            } else {
                return res.json(m);
            } 
        }
    }
    for (const missione of missioni) {
        if (missione.id === reqId) {
            return res.status(403).json({ messaggio: 'Clearance insufficiente per questa missione' });
        }
    }

    return res.status(404).json({messaggio: "missione non  trovata"})
    
})

server.listen(PORT, () => {
    console.log('online');
})