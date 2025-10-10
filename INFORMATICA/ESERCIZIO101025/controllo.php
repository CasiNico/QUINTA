<?php

    $lista = [];
    $email = $_GET["email"];
    $pws = $_GET["password"];

    foreach ($lista as $key => $value) {
        if ($key == $email && $value == $pws) {
            echo ("<p>UTENTE LOGGATO</p>");
        }else{
            echo ("<p>UTENTE NON TROVATO</p>");
            echo ("<p>REGISTRAZIONE IN CORSO</p>");
            $lista[$email] = $pws;
        }
    }

?>