<?php

if(isset($_COOKIE['utente'])) { // se il cookie esiste mostra il nome dell'utente
    echo(
        "Ciao " . $_COOKIE['utente'] . '<br>
        <form action="delete-cookie.php" method="GET">
            <input type="submit" value="ELIMINA COOKIE">
        </form> '
    );
} else { // se non esiste il cookie mostra il form per crearlo
    echo(
        '
        <form action="set-cookie.php" methos="GET">
            <label for="utente">Nome utente: </label>
            <input type="text" name="utente">
            <input type="submit" value="INVIA">
        </form>
        '
    );
}

?>

</body>
</html>