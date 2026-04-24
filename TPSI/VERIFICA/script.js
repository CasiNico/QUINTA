let inUtente = document.getElementById('inUtente')
let inCodicePc = document.getElementById('inCodicePc')
let btnOccupa = document.getElementById('btnOccupa')
let btnLibera = document.getElementById('btnLibera')
let btnElimina = document.getElementById('btnElimina')
let boxAula = document.getElementById('boxAula')
let boxStatistiche = document.getElementById('boxStatistiche')

let arrayPc = [
    {codicePc : "A01", utente : "", stato : "libero"},
    {codicePc : "B02", utente : "", stato : "libero"},
    {codicePc : "C03", utente : "", stato : "libero"},
    {codicePc : "D04", utente : "", stato : "libero"},
    {codicePc : "E05", utente : "", stato : "libero"}
]

/*
function refreshStatistiche () {
    boxStatistiche.innerHTML = ""
    let boxStats = document.createElement('div')
    let totPc = 0
    let totPcLiberi = 0
    let totPcOccupati = 0
    for (let pc of arrayPc) {
        totPc += 1
        if (pc.stato === "libero") {
            totPcLiberi += 1
        } else {
            totPcOccupati += 1
        }
    }
    boxStats.textContent = "TOTALE PC: " + totPc + " TOTALE PC LIBERI: " + totPcLiberi + " TOTALE PC OCCUPATI: " + totPcOccupati
    boxStatistiche.append(boxStats)
}
*/

/*
nel caso avessi scelto la versione sopra avrei messo un div boxStat in un altro div boxStatistiche l'ho riprogettata ma il fine è lo stesso

preferisco questa versione perchè va a capo anche se più lunga a livello si righe
*/

function refreshStatistiche () {
    boxStatistiche.innerHTML = ""
    let totPc = 0
    let totPcLiberi = 0
    let totPcOccupati = 0
    let boxTotPc = document.createElement('span')
    let boxTotPcLiberi = document.createElement('span')
    let boxTotPcOccupati = document.createElement('span')

    for (let pc of arrayPc) {
        totPc += 1
        if (pc.stato === "libero") {
            totPcLiberi += 1
        } else {
            totPcOccupati += 1
        }
    }

    boxTotPc.textContent = "TOTALE PC: " + totPc
    boxTotPcLiberi.textContent = "TOTALE PC LIBERI: " + totPcLiberi
    boxTotPcOccupati.textContent = "TOTALE PC OCCUPATI: " + totPcOccupati

    boxStatistiche.append(boxTotPc)
    boxStatistiche.append(document.createElement('br'))
    boxStatistiche.append(boxTotPcLiberi)
    boxStatistiche.append(document.createElement('br'))
    boxStatistiche.append(boxTotPcOccupati)
}

/*
ho preferito fare un div boxStat in boxStatistiche,
avrei potuto manipolare solo boxStatistiche
*/

function refreshBoxAula() {
    boxAula.innerHTML = ""
    for (let pc of arrayPc) {
        let boxPc = document.createElement('div')
        boxPc.textContent = "PC " + pc.codicePc + " : " + pc.stato
        if (pc.stato == "occupato") {
            boxPc.textContent += " da " + pc.utente
        }
        boxAula.append(boxPc)
    }
    refreshStatistiche()
}

function issetCod () {
    if (inCodicePc.value == "") {
        alert('INSERIRE CODICE')
        return false
    }
    return true
}

function issetUtente () {
    if (inUtente.value == "") {
        alert('INSERIRE UTENTE')
        return false
    }
    return true
}

function pcByCod () {
    for (let pc of arrayPc) {
        if (pc.codicePc == inCodicePc.value) {
            return pc
        }
    }
    alert('CODICE NON VALIDO')
    return null
}

btnOccupa.addEventListener("click", () => {
    if (issetCod()) {
        if (issetUtente()) {
            if (pcByCod().stato === "libero") {
                pcByCod().stato = "occupato"
                pcByCod().utente = inUtente.value
            } else {
                alert("PC GIA' OCCUPATO DA " + pcByCod().utente)
            }
            refreshBoxAula()
        }
    }
})

btnLibera.addEventListener("click", () => {
    if (issetCod()) {
        if (pcByCod().stato === "occupato") {
            pcByCod().stato = "libero"
            pcByCod().utente = ""
        } else {
            alert("PC " + pcByCod().codicePc + " GIA' LIBERO")
        }
        refreshBoxAula()
    }
})

btnElimina.addEventListener("click", () => {
    if (issetCod()) {
        let newArrayPc = []
        for (let pc of arrayPc) {
            if (pc.codicePc !== pcByCod().codicePc) {
                newArrayPc.push(pc)
            }
        }
        arrayPc = newArrayPc
        refreshBoxAula()
    } 
})

refreshBoxAula()