const http = require("http")

const PORT = 1533
const HOSTNAME = "localhost"

const server = http.createServer((req, res) => {
    
    if(req.url === "/"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain")
        res.end("ciao");
    }

    if(req.url === "/numbers" && req.method === "GET"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({ numbers: number}));
    }

})

server.listen(PORT, HOSTNAME, () => {
    console.log("ONLINE");
})