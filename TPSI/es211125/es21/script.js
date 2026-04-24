
const btnContainer = document.getElementById("btnContainer")
const somma = document.getElementById("somma")
const resetBtn = document.getElementById("reset")

let interval = setInterval(createBtn, 1000)

let index = 1

function createBtn() {
    if (index < 31) {
        let newButton = document.createElement("button")
        newButton.textContent = index++
        newButton.addEventListener("click", () => {
            //occhio tipi
            somma.textContent = Number(somma.textContent) + Number(newButton.textContent)
            newButton.remove()
        })
        btnContainer.append(newButton)
    } else {
        clearInterval(interval) // elimina l'interval e non esegue più
    }
}

function reset () {
    somma.textContent = 0
    index = 1
    clearInterval(interval)
    interval = setInterval(createBtn, 1000)
    btnContainer.innerHTML = ""
}

resetBtn.addEventListener("click", reset)



