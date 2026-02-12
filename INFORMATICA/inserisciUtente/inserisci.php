<?php

if (isset($_POST['id_utente']) && isset($_POST['nome']) && isset($_POST['cognome']) && isset($_POST['email']) && isset($_POST['età'])) {
    
$hostname = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "inserisciutente";
$port = 3306;

// creo la connessione
$conn = new mysqli($hostname, $username, $password, $dbname, $port);

// scrivo la query
$sql = "INSERT INTO utente (id_utente, nome, cognome, email, età) 
VALUES ('" . $_POST['id_utente'] . 
"', '" . $_POST['nome'] .
"', '" . $_POST['cognome'] .
"', '" . $_POST['email'] .
"', " . $_POST['età'] . ")";

// invio la query e verifico che sia andata a buon fine
if ($conn -> query($sql) === TRUE) {
    echo ("dati inserti con successo, <a href='index.html'>premi qui</a>");
} else {
    echo ("errore, dati non inseriti, <a href='index.html'>premi qui</a>");
}

// chiudo la connessione !!! importante
$conn -> close();

} else {
    echo ('<h3> errore, <a href="index.html">PREMERE QUI</a></h3>');
}

?>