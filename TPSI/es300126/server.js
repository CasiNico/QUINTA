const http = require("http")

const PORT = 1533
const HOSTNAME = "localhost"

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("ciao");
    }
})

server.listen(PORT, HOSTNAME, () => {
    console.log("ONLINE");
})