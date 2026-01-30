<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
</head>
<body>

<?php

if(isset($_POST["login"]) && isset($_POST["pws"])){

    $utenti = json_decode(file_get_contents("utenti.json"), true);

    $login = $_POST["login"];
    $password = $_POST["pws"];

    if (isset($utenti[$login]) && $utenti[$login] == $password) {
        echo ('
        <h1>UTENTE VERIFICATO</h1>
        <a href="oggetti.php">
            <button>VEDI LISTA OGGETTI</button>
        </a> <br></br>
        <a href="mostraCarrello.php">
            <button>VEDI CARRELLO</button>
        </a>
        ');
        session_set_cookie_params(3600);
        session_start();
    }else{
        echo ('
        <h1>UTENTE NON REGISTRATO</h1>
        <a href="singup.php">
            <button>PREMI QUI PER REGISTRARTI</button>
        </a>
        ');    
    }
}

?>

</body>
</html>
