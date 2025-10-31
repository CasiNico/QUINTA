<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcolatrice v2</title>
</head>
<body>

<script src="script.js"></script>

<form action="index.php" method="GET">    
    <label type="text" name="lab" id="lab"> <?php show(); ?> </label> <br> <!-- viene mostrato il risultato -->

    <button type="button" id="t1" onclick="aggiungi('1')">1</button>
    <button type="button" id="t2" onclick="aggiungi('2')">2</button>
    <button type="button" id="t3" onclick="aggiungi('3')">3</button> <br>
    <button type="button" id="t4" onclick="aggiungi('4')">4</button>
    <button type="button" id="t5" onclick="aggiungi('5')">5</button>
    <button type="button" id="t6" onclick="aggiungi('6')">6</button> <br>
    <button type="button" id="t7" onclick="aggiungi('7')">7</button>
    <button type="button" id="t8" onclick="aggiungi('8')">8</button>
    <button type="button" id="t9" onclick="aggiungi('9')">9</button> <br>
    <button type="button" id="t0" onclick="aggiungi('0')">0</button>

    <button type="submit" op="piu" onclick="op()">+</button> <br>
    <button type="submit" op="meno" onclick="op()">-</button>
    <button type="submit" op="per" onclick="op()">*</button>
    <button type="submit" op="diviso" onclick="op()">/</button>
    <label type="text" id="HidLab" value="" hidden>
</form>


    
</body>
</html>

<?php
$risultato = "";
$old_num = $_GET["HidLab"];
$new_num = $_GET["lab"];
$op = $_GET["op"];

switch("op") {
    case "piu":
        $risultato = somma($old_num, $new_num);
        break;
    case "meno":
        $risultato = sottrazione($old_num, $new_num);
        break;
    case "per":
        $risultato = moltiplicazione($old_num, $new_num);
        break;
    case "diviso":
        $risultato = divisione($old_num, $new_num);
        break;
        
}

function somma($old_num, $new_num) {
    return $old_num + $new_num;
}
function sottrazione($old_num, $new_num) {
    return $old_num - $new_num;
}
function moltiplicazione($old_num, $new_num) {
    return $old_num * $new_num;
}
function divisione($old_num, $new_num) {
    if($new_num != 0){
        return $old_num / $new_num;
    } else {
        return "Errore";
    }
}
function show() {
    if(isset($risultato)){
        echo($risultato);
    } else {
        echo(0);
    }
}

?>