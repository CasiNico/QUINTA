<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="oggetti.php" method="GET">
    <label for="login">login: </label>
    <input type="text" name="login"> <br>
    <label for="pws" name="pws">Password: </label>
    <input type="text"><br>
    <input type="submit" value="ACCEDI">
</form>

<?php

$utenti = json_decode(file_get_contents("utenti"), true);

$login = $_GET["login"];
$password = $_GET["password"];

$json[$login] = $password;

file_put_contents("utenti.json", json_encode($utenti));

?>

</body>
</html>