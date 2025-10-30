function somma () {
    const num = [2, 3, 5, 7, 11];
    let somma = 0;
    for(let i = 0; i < num.length; i++) {
        somma += num[i];
    }
    document.getElementById("somma").textContent = somma;
}