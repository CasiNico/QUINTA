<?php

    $nomeFile = "utente.json";

    // verifico che il file esista
    if(!file_exists($nomeFile)){
        die("Errore: il file non esiste");
    }else{

        $contenuto = file_get_contents($nomeFile);
         //var_dump ($contenuto); // var_dump --> tipo e contenuto

        $dati = json_decode($contenuto, true); // decodifico il JSON in array associativo
        // var_dump($dati); // verifico il contenuto decodificato

        foreach ($dati as $utente) {
            echo("<p>");
            foreach($utente as $k => $v){
                echo("$k: $v</br>");
            }
            echo("</p>");
        }
    }
?>