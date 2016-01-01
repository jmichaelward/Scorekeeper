<?php require('inc/session.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title></title>
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="assets/css/main.css" type="text/css">
</head>

<body>
<div id="page">
    <header>
        <h1>Scorekeeper</h1>
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
<script src="assets/js/main_app.js"></script>
</body>
</html>
