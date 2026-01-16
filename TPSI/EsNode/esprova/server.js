// CNTR+J apre terminale

// IMPORTARE LIBRERIE HTTP

const http = require("http");

const PORT = 80;
const HOSTNAME = "localhost";


// creare server, http.createServer da riferimento al server

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {

        res.statusCode = 200;
        // HEADER NAME - MIME NAME
        res.setHeader("Content-Type","text/plain");
        res.end("Ciao, benvenuto");

    } else if (req.url === "/" && req.method === "POST") {
        
        res.statusCode = 405; // Method not allowed
        res.setHeader("Allow", "GET");
        res.end("method not allowed");

    } else if (req.url === "/" && req.method === "PUT") {
        
        res.statusCode = 405; // Method not allowed
        res.setHeader("Allow", "GET");
        res.end("method not allowed");

    } else if (req.url === "/" && req.method === "DELETE") {
        
        res.statusCode = 405; // Method not allowed
        res.setHeader("Allow", "GET");
        res.end("method not allowed");

    } else if (req.url === "/users" && req.method === "GET") {

        // restituisce un json di 5 utenti
        // ogni utente descritto da username, eta, email

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify([{username: "casi", age: "18", email: "c@a.it"},
                                {username: "fore", age: "18", email: "f@a.it"},
                                {username: "vero", age: "18", email: "v@a.it"}
        ]))
    
    } else if(req.url === "/number") {

        req.statusCode = 200;
        req.setHeader("Content-Type", "text/plain");
        res.end("Numero casuale: " + String((Math.random() * 100) + 1));

    } else if(req.url === "/number/" ) {

        req.statusCode = 200;
        req.setHeader("Content-Type", "text/plain");
        let randomNumber = (Math.random() * 100) + 1;
        res.end("Numero casuale: " + randomNumber);


    } else {

        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: req.url + " Not found" }));

    }

})

// port: numero porta
// hostname: nome host
// + funzione che esegue solo all'inizio

server.listen(PORT, HOSTNAME, ()=> {
    console.log("ONLINE su http:/" + HOSTNAME + ":" + PORT);
})