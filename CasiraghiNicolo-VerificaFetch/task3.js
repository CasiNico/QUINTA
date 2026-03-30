const url = 'http://localhost:3000'

async function creaPrenotazione () {

    const creaPrenotazione = await fetch(url + '/reservations', {
        method : "POST",
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            tableId : "TAV-001",
            time: "10:00",
            date: "2026-03-21",
            customerName: "Nicolò Casiraghi",
            guests: 3
        })
    });

    const creaPrenotazioneData = await creaPrenotazione.json()

    if (creaPrenotazioneData.success) {
        console.log('tavolo creato con successo')
        return {
            reservationId : creaPrenotazioneData.id,
            tableId : creaPrenotazioneData.tableId,
            time : creaPrenotazioneData.time
        }
    } else {
        return 'Errore 400: tavolo già creato alla stesso orario'
    }

}

creaPrenotazione().then((e) => {
    console.log(e)
})