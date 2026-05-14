const url = 'http://localhost:3000'

async function MaggIncasso () {

    const tablesRes = await fetch(url + '/tables')
    const tablesResData = await tablesRes.json()

    const reservationsRes = await fetch(url + '/reservations')
    const reservationsResData = await reservationsRes.json()

    const menuRes = await fetch(url + '/menu')
    const menuResData = await menuRes.json()

    // prezzo medio
    let prezzoMedio = 0
    let numPiatti = 0
    for (const piatto of menuResData.items) {
        numPiatti = numPiatti + 1
        prezzoMedio = prezzoMedio + piatto.price
    }
    prezzoMedio = prezzoMedio / numPiatti

    let TablesArray=[]

    for (const table of tablesResData.tables) {
        let prezzoTot = 0
        for(const reservation of reservationsResData.reservations) {
            prezzoTot = prezzoTot + (prezzoMedio * reservation.guests)
        }
        TablesArray.push({
            id: table.id,
            tot: prezzoTot
        })
        prezzoTot = 0
    }

    let tableMaxIncasso = 0
    let tableIdA = ''
    let tableNumberA = 0
    for (const table of TablesArray) {
        if (table.tot > tableMaxIncasso) {
            tableMaxIncasso = table.tot
            tableIdA = table.id
            tableNumberA = table.number

        }
    }

    return {
        tableId : tableIdA,
        tableNumber : tableNumberA,
        avaragePerGuest : prezzoMedio
    }



}

MaggIncasso().then((e) => {
    console.log(e)
})