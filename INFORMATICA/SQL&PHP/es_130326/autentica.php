<?php

session_start();

$conn = new mysqli ('17.0.0.1', 'root', '', 'utenti');

if (isset($_POST['login']) && isset($_POST['pws'])) {

} else {
    echo('<p> non valido <a href="index.html> torna alla login </a> </p>');
}

?>