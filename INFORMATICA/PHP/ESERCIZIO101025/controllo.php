<?php
// controllo.php

$users = [
    "nico" => [
        "nome" => "Nico",
        "cognome" => "Casiraghi",
        "email" => "nico@example.com",
        "password" => "1234"
    ],
    "mario" => [
        "nome" => "Mario",
        "cognome" => "Rossi",
        "email" => "mario@example.com",
        "password" => "5678"
    ],
    "Gigi" => [
        "nome" => "Luigi",
        "cognome" => "Bianchi",
        "email" => "gigi@example.com",
        "password" => "12345"
    ],
];

function in($key) {
    return isset($_GET[$key]) ? trim($_GET[$key]) : '';
}

$login = in('login');
$password = in('password');
$nome = in('nome');
$cognome = in('cognome');
$email = in('email');

$status = 'error';
$message = 'UTENTE NON TROVATO';
$details = [];

if ($login === '' || $password === '') {
    $message = 'Inserire login e password';
} elseif (!isset($users[$login])) {
    $message = 'Login non registrato';
} else {
    $user = $users[$login];
    if ($user['password'] !== $password) {
        $message = 'Password errata';
    } else {
        // se vengono forniti, confronta nome, cognome, email (case-insensitive)
        $mismatch = false;
        if ($nome !== '' && strcasecmp($user['nome'], $nome) !== 0) $mismatch = true;
        if ($cognome !== '' && strcasecmp($user['cognome'], $cognome) !== 0) $mismatch = true;
        if ($email !== '' && strcasecmp($user['email'], $email) !== 0) $mismatch = true;

        if ($mismatch) {
            $message = 'I dati aggiuntivi non corrispondono';
        } else {
            $status = 'success';
            $message = 'UTENTE LOGGATO';
            $details = [
                'Nome' => $user['nome'],
                'Cognome' => $user['cognome'],
                'Email' => $user['email'],
                'Login' => $login
            ];
        }
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Controllo Login</title>
    <style>
        body {
            background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
            font-family: 'Segoe UI', Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 420px;
            margin: 80px auto;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.12);
            padding: 32px;
            text-align: center;
        }
        h1 {
            color: violet;
            margin-bottom: 18px;
        }
        .success {
            color: #2ecc40;
            font-weight: bold;
            font-size: 1.1em;
            margin-bottom: 12px;
        }
        .error {
            color: #e74c3c;
            font-weight: bold;
            font-size: 1.1em;
            margin-bottom: 12px;
        }
        .details {
            text-align: left;
            margin: 12px auto 0;
            display: inline-block;
        }
        .details dt { font-weight: bold; }
        .details dd { margin: 0 0 8px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Controllo utente</h1>
        <?php if ($status === 'success'): ?>
            <p class="success"><?php echo htmlspecialchars($message, ENT_QUOTES, 'UTF-8'); ?></p>
            <dl class="details">
                <?php foreach ($details as $k => $v): ?>
                    <dt><?php echo htmlspecialchars($k, ENT_QUOTES, 'UTF-8'); ?></dt>
                    <dd><?php echo htmlspecialchars($v, ENT_QUOTES, 'UTF-8'); ?></dd>
                <?php endforeach; ?>
            </dl>
        <?php else: ?>
            <p class="error"><?php echo htmlspecialchars($message, ENT_QUOTES, 'UTF-8'); ?></p>
        <?php endif; ?>
    </div>
</body>
</html>