<?php

function delete_cookie(){
    if(isset($_COOKIE['utente'])){
        setcookie('utente', '', time() - 3600);
        echo 'cookie eliminato con successo';
    } else {
        echo 'errore: il cookie non esiste';
    }
}

delete_cookie();

echo (
    '
    <a href="index.php"><button>TORNA A INDEX</button></a>
    '
);

?>