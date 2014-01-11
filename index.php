<?php require('inc/config.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title></title>
    <link rel="stylesheet" href="css/main_app.css" type="text/css">

    <!-- JavaScript -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="<?php echo BASE_URL; ?>js/main_app.js"></script>
</head>

<body>
    <div id="page">
        <header><h1>Scorekeeper</h1></header>

        <div id="main"><?php

            if (isset($_SESSION['players'])) {
                include('views/player-scores.php');
            } else {
                include('views/num-player-form.php');
            } ?>

        </div>
    </div>
</body>
</html>
