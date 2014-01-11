<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_REQUEST)) {

    if (!isset($_SESSION['players'])) {
        $_SESSION['players'] = array();

        foreach ($_REQUEST['player-name'] as $key => $value) {
            $_SESSION['players'][] = array(
                'position' => $key,
                'name' => $value,
                'score' => 0
            );
        }
    }
}