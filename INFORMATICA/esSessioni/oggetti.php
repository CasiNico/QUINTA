<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OGGETTI</title>
</head>
<body>
  
<?php

echo('<table>');
foreach ($oggetti as $num => $ogg) {
    echo ('
    <tr>
        <td>' . $num . '</td>
        <td>' . $ogg . '</td>
    </tr>
    ');
}
echo ('</table>');

echo ('
<form>
    <label for="num">Numero oggetto: </label>
    <input type="number" name="num"><br>
    <button type="submit">AGGIUNGI AL CARRELLO</button>
</form>
');

?>

</body>
</html>

