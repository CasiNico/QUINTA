<?php

$salvataggio = "salvataggio.json";
if (file_exists($salvataggio)) {
    $contenuto = file_get_contents($salvataggio);
    $utenti = json_decode($contenuto, true);
} else {
    $utenti = [];
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="esercizio.php" method="GET">
        <label for="nome">Nome: </label>
        <input type="text" name="nome" required>
        <br>
        <label for="numero">Numero di telefono: </label>
        <input type="text" name="numero" required>
        <br>
        <input type="submit" value="Invia">
    </form>

<?php

$nome = $_GET['nome'];
$numero = $_GET['numero'];

$utenti[$nome] = $numero;

$contenutoAggiornato = json_encode($utenti);
file_put_contents($salvataggio, $contenutoAggiornato);

echo "<h2>Elenco Utenti:</h2>";
foreach ($utenti as $nomeUtente => $numeroUtente) {
    if ($nomeUtente !== "") {
        echo "<p>Nome: " . $nomeUtente . " - Numero: " . $numeroUtente . "</p>";
    }
}

?>

</body>
</html>