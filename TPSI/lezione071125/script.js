
console.log("test");
const btn = document.createElement("button");

btn.textContent = "click";

// btn.addEventListener("click", btnClick) // con funzione esterna 

btn.addEventListener("click", () => { // funziona lambda
    alert("cliccato");
})

/*
function btnClick() {   // funzione esterna
    alert("cliccato")
}
*/

document.body.append(btn);
console.log("test dopo");

// temporizzazione

// setTimeout è temporizzata
setTimeout(() => alert("ciao"), 2000);

//setInterval si ripete
let timer1 = setInterval(() => console.log("ping"), 1000);

// per fermare interval/timeout
clearInterval(timer1); // o clearTimeout();