<?php

    $nomeFile = "utente.json";

    // verifico che il file esista
    if(!file.exists($nomeFile)){
        die("Errore: il file non esiste") ;
    }else{
        $contenuto = file_get_contents($nomeFile);
        echo $contenuto;
    }

?>