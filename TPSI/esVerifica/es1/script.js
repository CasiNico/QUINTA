let codProdotto = document.getElementById('prodotto')
let btnCarica = document.getElementById('carica')
let btnScarica = document.getElementById('scarica')
let btnElimina = document.getElementById('elimina')
let inventario = document.getElementById('inventario')

let contenuto = [
    {cod : "A01", nome: "prodotto a", quantità: 0},
    {cod : "B02", nome: "prodotto b", quantità: 0},
    {cod : "C03", nome: "prodotto c", quantità: 0},
]

function visualizza () {
    inventario.innerHTML = ""
    for (let prodotto of contenuto) {
        let p = document.createElement("p")
        p.textContent = prodotto.cod + " => " + prodotto.nome + " : " + prodotto.quantità
        if (prodotto.quantità <= 10) {
            p.textContent += "*"
        }
        inventario.append(p)
    }
}

function verificaCodice () {
    if (codProdotto.value != "") {
        return true
    } else {
        alert("INSERIRE UN CODICE")
        return false
    }
}

visualizza()


btnCarica.addEventListener("click", () => {
    if (verificaCodice()) {
        for (let prodotto of contenuto) {
            if(prodotto.cod == codProdotto.value){
                prodotto.quantità += 10
                visualizza()
            }
        }
    }
})

btnScarica.addEventListener("click", () => {
    if (verificaCodice()) {
        for (let prodotto of contenuto) {
            if(prodotto.cod == codProdotto.value) {
                if(prodotto.quantità != 0) {
                    prodotto.quantità -= 7
                    if (prodotto.quantità < 0) {
                        alert("solo " + (-1*(0 - prodotto.quantità)) + " sono stati scaricati")
                        prodotto.quantità = 0
                    }
                } else {
                    alert("QUANTITA' INSUFFICIENTE")
                }
            }
        }
        visualizza()
    }
})

btnElimina.addEventListener("click", () => {
    if (verificaCodice()) {
        let index = 0
        for (let prodotto of contenuto) {
            if (prodotto.cod == codProdotto.value) {
                contenuto.splice(index, 1)
            }
        }
        visualizza()
    }
})