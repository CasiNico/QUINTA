
const display = document.getElementById("timer")
const startBtn = document.getElementById("startBtn")
const resetBtn = document.getElementById("resetBtn")
const pauseBtn = document.getElementById("pauseBtn")

// oggetto
let timer = {
    seconds : 1500,
    running: false
}

let interval

function updateView () {
    let min = parseInt(timer.seconds / 60)
    let sec = timer.seconds % 60
    display.textContent = min + ":" + sec
}

// ALT + SHIFT + FRECCIA PER CAMBIARE RIGA
function tick() {
    if (timer.running) {
        timer.seconds--
        updateView()
        if (timer.seconds === 0 ) {
            display.textContent("TIMER FINITO")
            clearInterval(interval)
            timer.seconds = 1500
            timer.running = false
        }
    }
}

function pause () {
    if (timer.running) {
        clearInterval(interval)
        timer.running = false
    } else {
        interval = setInterval(tick, 1000)
        timer.running = true
    }
}

function reset () {
    timer.running = false
    timer.seconds = 1500
    updateView()
    clearInterval(interval)
}

function start () {
    if (!timer.running) {
        // SetInterval(p1, p2)
        // esegui p1 ogni p2 ms
        // SetTimeout(p1,p2)
        // esegue p1 DOPO p2 ms (ONESHOT)
        interval = setInterval(tick, 1000)
        timer.running = true
    }
}

// se funzione corta > lambda
// se no normale
startBtn.addEventListener("click", start)
resetBtn.addEventListener("click", reset)
pauseBtn.addEventListener("click", pause)