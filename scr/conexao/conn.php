<?php

    ini_set('display_erros', true);
    erro_reporting(E_ALL);

    $hostname = "localhost";
    $database = "minha_escola";
    $username = "root";
    $password = "";

    if($conecta = mysqli_connect($hostname, $username, $password, $database)){
        echo 'conectado com sucesso';
    }else{
        echo 'não conectado erro: '.mysqli_connecta_erro();
    }