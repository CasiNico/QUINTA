<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SITO</title>
</head>
<body>

<h1>BENVENUTO IN</h1>

<?php

if(isset($_SESSION)){
    echo('CIAO ' . $_SESSION[$utente.$nomeUtente]);
    echo('
    <form action="mostraCarrello.php">
        <button type="submit">CARRELLO</button>
    </form>
    <form action="mostraProdotti.php">
        <button type="submit">PRODOTTI</button>
    </form>
    ');
}else {

    echo('
    <h1>
    ACCEDI PER CONTINUARE
    </h1>
    <a href="login/login.php">
        <button>ACCEDI</button>
    </a>
    <a href="login/singup.php">
        <button>REGISTRATI</button>
    </a>
    ');
}

?>



</body>
</html>