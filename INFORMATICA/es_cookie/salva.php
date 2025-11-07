<?php

$login = $_GET['login'];
$pws = $_GET['pws'];

if ($_COOKIE[$login]) {
    echo 'utente loggato';
}else {
    echo 'utente in registrazione... <br>';
    setcookie($login, $pws);
    echo 'utente registrato con successo';
}

echo("
<a href='index.html'>
    <button>TORNA A INDEX.HTML</button>
</a>
");

?>