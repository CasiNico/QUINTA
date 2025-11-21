<?php

$utenti = json_decode(file_get_contents("utente.json"), true);

$login = $_GET["login"];
$password = $_GET["pws"];

if ($utenti[] = $password) {
    echo ('
    <h1>UTENTE VERIFICATO</h1>
    <a href="oggetti.php">
        <button>VEDI LISTA OGGETTI</button>
    </a> <br>
    <a href="mostraCarrello.php">
        <button>VEDI CARRELLO</button>
    </a>
    ');
}else{
    echo ('
    <h1>UTENTE NON REGISTRATO</h1>
    <a href="singup.html">
        <button>REGISTRATI QUI</button>
    </a>
    ');    
}

?>