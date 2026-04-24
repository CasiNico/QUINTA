function controllo(){
    let num = document.getElementById("num").value;

    if(num % 2 == 0){
        document.getElementById("risultato").textContent = "Il numero è pari";
    } else {
        document.getElementById("risultato").textContent = "Il numero è dispari";
    }
}