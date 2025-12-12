function getUserAsync (id){
    return new Promise((resolve, reject) => {
        // dopo un po' dammi un numero

        let delay = Math.random() * 2000 + 500

        setTimeout(() => {
            if (id < 0 || id > 10) {
                reject(new Error("Id non trovato (" + id + ")"))
            } else {
                const user = {
                    id : id,
                    uname : "User-" + id
                    // altri campi
                }
                resolve(user)
            }
        }, delay)
    })
}

async function getUserData () {
    // leggo un id dal DOM, chiamo la funzione che mi restituisce lo user
    const id = document.getElementById("uId").value

    console.log("Eseguo con id: " + id)

    try {
        const user = await getUserAsync(id)
        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
}

document.getElementById("getUser").addEventListener("click", getUserData)


