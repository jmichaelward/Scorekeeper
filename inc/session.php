<?php
session_start();

// Make sure we know the number of players first
if ('POST' === $_SERVER['REQUEST_METHOD'] && isset($_REQUEST['num-players'])) {
    $_SESSION['num-players'] = $_REQUEST['num-players'];
}

if (!isset($_SESSION['num-players'])) {
    return;
}

// Add player names to the session once that form has been completed
if ('POST' === $_SERVER['REQUEST_METHOD'] && isset($_REQUEST['player-name'])) {
    if (!isset($_SESSION['players'])) {
        foreach ($_REQUEST['player-name'] as $key => $value) {
            $_SESSION['players'][] = array(
                'name' => $value,
            );
        }
    }
}
