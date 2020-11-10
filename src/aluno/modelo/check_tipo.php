<?php

    session_start();

    $informacoes = array('tipo' => $_SESSION['tipo']);

    echo json_encode($informacoes);