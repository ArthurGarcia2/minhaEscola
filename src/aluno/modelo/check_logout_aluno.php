<?php

    session_start();

    if (@$_SESSION['id']){
        $informacoes = array (
            'return' => true,
            'nome' => $_SESSION['nome']
        );
    }else {
        $informacoes = array ('return' => false);
    }

    echo json_encode($informacoes);