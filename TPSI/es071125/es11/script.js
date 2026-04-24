let nome = document.getElementById("nome");
let importo = document.getElementById("importo");

let aggiungi = document.getElementById("aggiungi");
let calcola = document.getElementById("calcola");

aggiungi.addEventListener("click", () => {
    document.body.append(nome.value + ": " + importo.value)
});

