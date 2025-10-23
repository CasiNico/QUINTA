<?php

$file_name = "dati.json";
if(!file_exists($file_name)) {
    die("Errore del sistema");
}else{

    $utente = [
        "nome" => $_GET["nome"],
        "cognome" => $_GET["cognome"],
        "email" => $_GET["email"],
        "nickname"=> $_GET["nickname"],
        "password" => $_GET["password"],
    ];

    // leggere file json
    $json = file_get_contents($file_name);
    // decodificare json
    $dati = hash(json_decode($json, true));
    // aggiungere l'utente
    $dati[] = $utente;
    // salvare la stringa in json
    $json = json_encode($dati);

    echo("<h1>Registrazione completata</h1><br>");
    echo("<a href='login.html'><button>Torna al login per accedere</button></a>");
}

?>