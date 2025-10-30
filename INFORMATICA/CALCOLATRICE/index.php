<?php

    $num1 = $_GET["num1"];
    $num2 = $_GET["num2"];
    $op = $_GET["op"];
    if($op === "Somma") {
        $result = $num1 + $num2;
    } elseif($op === "Sottrazione") {
        $result = $num1 - $num2;
    } elseif($op === "Moltiplicazione") {
        $result = $num1 * $num2;
    } elseif($op === "Divisione") {
        if($num2 != 0) {
            $result = $num1 / $num2;
        } else {
            $result = "Errore: Divisione per zero";
        }
    } else {
        $result = "";
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcolatrice</title>
</head>
<body>
    
    <form action ="index.php" method="GET">

        <!-- Stile fatto da chatgpt -->
        <style>
            form {
                max-width: 300px;
                margin: 30px auto;
                padding: 15px 20px;
                border: 1px solid #ccc;
                border-radius: 8px;
                background-color: #fafafa;
                font-family: sans-serif;
                box-shadow: 0 0 5px rgba(0,0,0,0.1);
            }

            label {
                display: inline-block;
                margin-top: 10px;
                font-size: 14px;
                color: #333;
            }

            input[type="number"] {
                width: 100%;
                padding: 6px;
                margin-top: 5px;
                margin-bottom: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }

            input[type="submit"] {
                width: 100%;
                padding: 8px;
                margin-top: 5px;
                border: none;
                border-radius: 4px;
                background-color: #4CAF50;
                color: white;
                cursor: pointer;
                font-size: 14px;
                transition: background-color 0.2s ease;
            }

            input[type="submit"]:hover {
                background-color: #45a049;
            }

            label[for="result"] {
                display: block;
                margin-top: 15px;
                font-weight: bold;
                color: #222;
                background: #f2f2f2;
                padding: 8px;
                border-radius: 4px;
            }
        </style>

        <label for="num1">Numero 1:</label>
        <input type="number" id="num1" name="num1" required> <br>
        <label for="num2">Numero 2:</label>
        <input type="number" id="num2" name="num2" required><br>
        <input type="submit" name="op" value="Somma"><br>
        <input type="submit" name="op" value="Sottrazione"><br>
        <input type="submit" name="op" value="Moltiplicazione"><br>
        <input type="submit" name="op" value="Divisione"><br><br>
        <label for="result">Risultato: <?php echo($result); ?></label>
    </form>

</body>
</html>