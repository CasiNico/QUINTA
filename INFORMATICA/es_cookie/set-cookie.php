<?php

function set_cookie($nomeUtente) {
    setcookie("utente", $nomeUtente, time() + 3600);
    if(isset($_COOKIE['utente'])) {
        echo 'cookie creato<br>Ciao ' . $_COOKIE['utente'] . '!';
    } else {
        echo "errore: non è stato salvato l'utente";
    }
}

set_cookie($_GET['utente']);

echo (
'
<a href="index.php"><button>TORNA A INDEX</button></a>
'
);

?>