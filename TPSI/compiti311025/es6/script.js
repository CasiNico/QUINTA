function verifica() {
    const frutta = ["mela", "banana", "pera"];
    let posFrutto = document.getElementById("posFrutto").value;
    if (posFrutto >= 0 && posFrutto < frutta.length) {
        document.getElementById("result").textContent = frutta[posFrutto];
    } else {
        document.getElementById("result").textContent = "Errore: posizione non valida.";
    }
}