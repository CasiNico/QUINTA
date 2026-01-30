<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SINGUP</title>
</head>
<body>

<?php

if(isset($_POST["login"]) && isset($_POST["pws"])){

    $utenti = json_decode(file_get_contents("utenti.json"), true);

    $login = $_POST["login"];
    $password = $_POST["pws"];

    $utenti[$login] = $password;

    file_put_contents("utenti.json", json_encode($utenti));

    echo('
        <h1>REGISTRAZIONE COMPLETATA, CIAO ' . $login . '</h1>
        <a href="index.php">
            <button>PREMI QUI PER TORNARE AL LOGIN</button>
        </a>
    ');

    session_set_cookie_params(3600);
    session_start();

} else {
    echo(
    '
    <h1>COMPILA IL FORM PER LA REGISTRAZIONE</h1>
    <form action="singup.php" method="POST">
        <label for="login">login: </label>
        <input type="text" name="login"> <br>
        <label for="pws" name="pws">Password: </label>
        <input type="text" name="pws"><br></br>
        <input type="submit" value="COMPLETA REGISTRAZIONE">
    </form>
    ');
}

?>

</body>
</html>

