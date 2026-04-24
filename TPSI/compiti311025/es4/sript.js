function verifica(){
    let voto = document.getElementById("voto").value;
    if(voto >= 6 && voto <= 10){
        document.getElementById("result").textContent = "sufficiente";
    } else if(voto >= 0 && voto < 6){
        document.getElementById("result").textContent = "insufficiente";
    }else{
        document.getElementById("result").textContent = "voto non valido";
    }
}