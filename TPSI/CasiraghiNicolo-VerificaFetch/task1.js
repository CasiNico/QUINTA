const url = 'http://localhost:3000'

async function piattiVegetariani() {

    const menuRes = await fetch(url + '/menu')

    const piattiResData = await menuRes.json()

    let VegArray = []

    for (const piatto of piattiResData.items) {

        if (piatto.vegetarian) {
            VegArray.push({
                id : piatto.id,
                name : piatto.name,
                category : piatto.category,
                price : piatto.price
            })
        }

    }

    return VegArray
} 

piattiVegetariani().then((e) => {
    console.log(e)
})