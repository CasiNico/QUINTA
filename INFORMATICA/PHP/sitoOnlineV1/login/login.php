<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ACCEDI</title>
</head>
<body>

<?php

$jsonUtenti = json_decode(file_get_contents("../JSON/utenti.json"), true);

if(!isset($_SESSION)) {

    if(isset($_POST['username']) && isset($_POST['pws'])) {

        if(verifica($_POST['username'], $_POST['pws'], $jsonUsers)){
            session_set_cookie_params(3600); // sessione di un'ora
            session_start();
            echo('
            <h3>UTENTE LOGGATO</h3>
            <a href="index.php">
                <button>CONTINUA QUI</button>
            </a>
            ');
        } else {
            echo('<h3>UTENTE NON ESISTENTE</h3>');
            showForm();
        }
        
    } else {
        showForm();
    }

} else {
    echo('
    <h3>' . "L'UTENTE HA GIA' EFFETTUATO L'ACCESSO" . '</h3>
    <a href="index.php">
        <button>CONTINUA QUI</button>
    </a>
    ');
}

function showForm() { // mostra il form per accedere
    echo('
    <h3>COMPILA IL FORM PER ACCEDERE</h3>
    <form action="login.php" method="POST">
        <label for="username">NOME UTENTE:</label>
        <input type="text" name="username" required> <br>
        <label for="pws">PASSWORD: </label>
        <input type="password" name="pws" required> <br>
        <button type="submit">ACCEDI</button> <br>
    </form>
    <a href="singup.php">
        <button>REGISTRATI QUI</button>
    </a>
    ');
}

function verifica ($username, $pws, $jsonUsers) {
    if (isset($jsonUsers[$username]) && $jsonUsers[$username] == $pws) {
        return true;
    } else {
        return false;
    }
}

?>


    
</body>
</html>