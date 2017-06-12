<?php require('inc/session.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Scorekeeper by J. Michael Ward</title>
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="assets/dist/css/main.css" type="text/css">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/src/img/apple-touch-icon.png">
</head>

<body>
<div id="page">
    <header class="page__hdr">
        <h1 class="page__hd">Scorekeeper</h1>
    </header>

    <div id="main">
        <?php
        if (isset($_SESSION['players'])) {
            include 'views/player-scores.php';
        } else {
            include 'views/num-player-form.php';
        }
        ?>
    </div>
</div>

<!-- JavaScript -->
<script src="assets/dist/js/scripts.js"></script>
</body>
</html>
