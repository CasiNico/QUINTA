const url = 'http://localhost:3000'

async function PrenotazionePerTavolo () {

    const tablesRes = await fetch(url + '/tables')
    const tableResData = await tablesRes.json()

    const reservationsRes = await fetch(url + '/reservations')
    const reservationsResData = await reservationsRes.json()

    let final = []

    for (const table of tableResData.tables) {
        
        const tableID = table.id
        let reservationsNum = 0 

        for (const reservation of reservationsResData.reservations) {
            if (tableID === reservation.tableId) {
                
                reservationsNum = reservationsNum + 1
            }
        }

        final.push({
            tableID : reservationsNum 
        })

    }

    return final

}

PrenotazionePerTavolo().then((e) => {
    console.log(e)
})