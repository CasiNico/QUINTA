console.log("Hello")


// variabili
let x = 6
y = 9
let nome = "Nicolò"

// costanti
const PI = 3.14

// per restituire il tipo di dato si usa typeof
console.log("x:" + typeof(x))
x = "Ciao" // cambia il tipo di dato
console.log("x:" + typeof(x))

console.log("PI: " + typeof(PI))

// undefined e null
// undefined = variabile dichiarata ma non inizializzata
//null = variabile che non punta a nulla (lo sceglie chi programma)

let a
console.log("a: " + typeof(a)) // undefined

let arr = []
console.log("arr: " + typeof(arr)) // restituisce object perchè è un oggetto array anche se fosse pieno

let obj = {} // oggetto
console.log("obj: " + typeof(obj)) // restituisce object perchè è un oggetto

// stringa
let str = "Casiraghi Nicolò"
console.log(str[2]) //per prender il char in posizione 2
console.log(str.charAt(2)) //per prendere il char in posizione 2
console.log(str.length) // per prendere la lunghezza della stringa
console.log("index of i: " + str.indexOf("i")) // restituisce la prima occorrenza

// sottostinga .slice(inizio, fine)
console.log(str.slice(0, 9)) //prende la sottostringa da 0 a 9 (9 escluso)

// sostituzione .replace("cosa sostituire", "con cosa")
console.log(str.replace("Nicolò", "Nico")) // con replaceAll sostituisco tutte le occorrenze, con replace solo la prima

console.log(str.includes("Casiraghi")) // restituisce true se la sottostringa è contenuta nella stringa

// OPERZAZIONI
// l'ordine delle operazioni è come in matematica
// potenze n1**n2
console.log(2**3) // 2^3 = 8
console.log(2**"Ciao") // restituisce NaN (not a number) perchè non può fare l'operazione
