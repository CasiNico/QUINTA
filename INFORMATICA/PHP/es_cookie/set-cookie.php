<?php

function set_cookie($nomeUtente) {
    setcookie("utente", $nomeUtente, time() + 3600);
    echo'ricarica la pagina per completare';
}

set_cookie($_GET['utente']);

if(isset($_COOKIE['utente'])) {
    echo 'cookie creato<br>Ciao ' . $_COOKIE['utente'] . '!';
} 

echo (
'
<a href="index.php"><button>TORNA A INDEX</button></a>
'
);

?>