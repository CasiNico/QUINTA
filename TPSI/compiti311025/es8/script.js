function verifica() {
    const numeri = [2, 3, 5, 7, 11];
    let verifica = false;
    let num = document.getElementById("num").value;
    for (let i = 0; i < numeri.length; i++) {
        if (num == numeri[i]) {
            document.getElementById("result").textContent = "numero trovato";
            verifica = true;
            break;
        }
    }
    if (!verifica) {
        document.getElementById("result").textContent = "numero non trovato";
    }
}