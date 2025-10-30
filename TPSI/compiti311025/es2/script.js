function somma() {
    let n1 = document.getElementById("in1").value;
    let n2 = document.getElementById("in2").value;

    let somma = Number(n1) + Number(n2);

    document.getElementById("messaggio").textContent = somma;
}