<?php

$lista = [
    "nico" => "1234",
    "mario" => "5678",  
    "Gigi"=> "12345",
];

?>

<!DOCTYPE html>
<html>
<head>
    <title>Controllo Login</title>
    <style>
        body {
            background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
            font-family: 'Segoe UI', Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 400px;
            margin: 80px auto;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.12);
            padding: 32px;
            text-align: center;
        }
        h1 {
            color: violet;
            margin-bottom: 24px;
        }
        .success {
            color: #2ecc40;
            font-weight: bold;
            font-size: 1.2em;
        }
        .error {
            color: #e74c3c;
            font-weight: bold;
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Controllo utente</h1>
        <?php
            $k = $_GET["email"];    
            $v = $lista[$k];

            if($v === $_GET["password"])
                echo("<p class='success'>UTENTE LOGGATO</p>");
            else
                echo("<p class='error'>UTENTE NON TROVATO</p>");
        ?>
    </div>
</body>
</html>