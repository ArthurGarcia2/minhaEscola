<?php

    include('../../conexao/conn.php');

    $banco = "SELECT * FROM disciplinas";

    $result = mysqli_query($conecta, $banco);

    if($result && mysqli_num_rows($result) > 0){
        while($rows = mysqli_fetch_assoc($result)){
            $informacoes[] = array_map(null, $rows);
        }
    }else{
        $informacoes = array('Erro'=> 'Não foi possivel buscar nenhum resultado');
    }

    echo json_encode($informacoes);