const limite = document.getElementById("limite").value;
const btnAvvia = document.getElementById("avvia");

const btnPiu = document.getElementById("piu");
const btnMeno = document.getElementById("meno");

const content = document.getElementById("content");

let tempo = 0;

btnAvvia.addEventListener("click", () => {
    if (tempo = 0) {
        tempo = limite;
        let timer = setInterval(ping, 1000);
    } else {
        clearInterval(timer);
        fineTimer;
    }
});

btnPiu.addEventListener("click", () => {
    if (tempo != 0) {
        tempo += 1;
    } else {
        fineTimer;
    }
});

btnMeno.addEventListener("click", () => {
    if (tempo != 0){
        tempo -= 1;
    } else {
        fineTimer;
    }
});

function ping () {
    if (tempo != 0){
        tempo -= 1;
    } else {
        fineTimer;
    }
}

function fineTimer() {

}

