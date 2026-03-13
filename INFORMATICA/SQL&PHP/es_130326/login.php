<?php

session_start();



if(isset($_SESSION['login'])) {

    echo('');

}else{

    if (isset($_POST['login']) && isset($_POST['pws'])){
        
    } else {

        echo(
        '
        <form action="autentica.php" method="POST">
            <label for="login">login: </label>
            <input type="text" id="login" required> <br>
            <label for="pws">password: </label>
            <input type="password" id="pws" required> <br>
            <button type="submit">accedi</button>
        </form>
        ');

    }
}

?>