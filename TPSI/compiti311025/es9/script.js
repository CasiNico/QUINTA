const nomi = ["Marco", "Lucia", "Giovanni", "Sofia", "Andrea"];
const paragraph = document.getElementById("content");
const bottone = document.getElementById("btn");


bottone.addEventListener('click', () => { 
    let nomeProv =""; // nome provvisorio
    for(let nome of nomi) {
        if (nome.length > nomeProv.length) {
            nomeProv = nome;
        }
    }
    paragraph.textContent = nomeProv;
    nomeProv = "";
});


