const baseURL = "https://jsonplaceholder.typicode.com/users/"

let data = document.getElementById("data")

async function getUser(baseURL) {

    let response = await fetch(baseURL)
    // console.log(response)

    if (response.ok) {
        console.log("OK")
        let json = await response.json()

        data.innerHTML += json.name.split(" ")[1].toUpperCase()+"</br>"

    } else {
        console.log("Errore HTTP: " + response.status)
    }

}

for(let i = 1; i <= 15; i++) {
    const URLToCall = baseURL + i
    try {
        getUser(URLToCall)
    } catch {

    }
}
