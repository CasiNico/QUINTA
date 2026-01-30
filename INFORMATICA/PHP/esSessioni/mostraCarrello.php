<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CARRELLO</title>
</head>
<body>

<?php
session_start();
if (isset($_SESSION)) {

    if(isset($_GET["num"])){

        $numOggetto = $_GET["num"];

        // il file deve contenere SOLO JSON!
        $oggetti = json_decode(file_get_contents("oggetti.json"), true);

        if(isset($oggetti[$numOggetto])){

            $_SESSION[] = $oggetti[$numOggetto];

            echo "OGGETTO AGGIUNTO CON SUCCESSO";

        } else {
            echo "<h1>OGGETTO NON ESISTENTE</h1>";
        }
    }
    echo('<table>');
    foreach($_SESSION as $num => $ogg){
        echo('
        <tr>
            <td>' . $num . '</td>
            <td>' . $ogg . '</td>
        </tr>
        ');
    }
    echo('</table>');

} else{
    echo('<h3>rieffettuare il login</h3>
    <a href="index.php">
        <button>TORNA AL LOGIN</button>
    </a>
    ');
}



?>

<a href="oggetti.php">
    <button>TORNA A OGGETTI</button>
</a>
    
</body>
</html>