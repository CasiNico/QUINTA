<?php
    // codice php
    $nome = "Nicolò";
    $s = "<h1 style='color: red'>Ciao $nome </h1>"; 
    // tra apici doppi le variabili vengono interpretate
    // tra apici singoli no
    // devo mettere il punto per concatenare le stringhe
    echo($s);

    // gestione array

    $lista = array(1,2,3,4,5,6,7,8,9,0);
    foreach($lista as $k => $v){
        echo ("<p> $k: $v </p>");
    }

?>