<?php

$controlla_esistenza = false;

$file_name = "dati.json";
if(!file_exists($file_name)) {
    die("Errore del sistema");
}else{
    $json = file_get_contents($file_name);
    $dati = json_decode($json, true);
    foreach($dati as $utente_salvato) {
        if($utente_salvato["email"] === $_GET["email"] && $utente_salvato["password"] === $_GET["password"]){
            echo("<h1>Accesso riuscito</h1><br>");
            echo("<a href='index.html'><button>Vai alla pagina</button></a>");
            $controlla_esistenza = true;
        }
    }
}
if(!$controlla_esistenza){
    echo("<h1>Accesso negato</h1><br><button><a href='login.html'>Torna al login</a></button>");
}

?>