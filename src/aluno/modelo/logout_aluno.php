<?php

    session_start();

    if(session_destroy()){
        $informacoes = array('result' => true);
    }else{
        $informacoes = array('result' => false);
    }

    echo json_encode($informacoes);