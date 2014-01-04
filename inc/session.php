<?php
session_start();

if (!empty($_REQUEST)) {

    $_SESSION['players'] = array();

    foreach ($_REQUEST as $key => $value) {
        $_SESSION['players'][] = array(
            'position' => $key,
            'name' => $value,
            'score' => 0
        );
    }
}