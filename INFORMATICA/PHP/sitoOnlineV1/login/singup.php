<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REGISTRATI</title>
</head>
<body>
    
<?php



if (!isset($_SESSION)){

    if (!isset($_POST)) {

        showForm();

    } else {

        if(verification($_POST)) {

            saveUser($_POST);

            session_set_cookie_params(3600);
            session_start();

            echo('
            
            ');

        } else {
            echo('
            <h3>' . "UTENTE GIA' REGISTRATO". '</h3>
            <a href="login.php">
                <button>ACCEDI QUI</button>
            </a>
            ');
        }

    }

} else {
    echo('
    <h3>' . "L'UTENTE HA GIA' EFFETTUATO L'ACCESSO" . '</h3>
    <a href="index.php">
        <button>CONTINUA QUI</button>
    </a>
    ');
}

function showForm () {
    echo('
    <form action="singup.php" method="POST">
        <label for="name">Nome:</label>
        <input type="text" name="name" required> <br>
        <label for="surname">Cognome: </label>
        <input type="text" name="surname" required> <br>
        <label for="username">Nome Utente: </label>
        <input type="text" name="username" required> <br>
        <label for="pws">Password: </label>
        <input type="password" name="pws" required> <br>
        <button type="submit">REGISTRATI</button>
    </form>
    <a href="login.php">
        <button>ACCEDI QUI</button>
    </a>
    ');
}

function verification ($_POST) {
    $jsonUsers = json_decode(file_get_contents('../JSON/users.json'), true);
    if (isset($jsonUsers[$_POST['username']])) {
        return false;
    } else {
        return true;
    }
}

function saveUser($userCredential){
    $jsonUsers = json_decode(file_get_contents('../JSON/users.json'), true);
    $user = [
        'name' => $userCredential['name'],
        'surname' => $userCredential['surname'],
        'pws' => $userCredential['pws'],
    ];
    $jsonUsers[$userCredential['username']] = $user;
    file_put_contents('../JSON/users.json', json_decode($jsonUsers));
}

?>

<h3>UTENTE GIA' REGISTRATO</h3>
<a href="login.php">
    <button>ACCEDI QUI</button>
</a>


</body>
</html>