<?php

    include('../../conexao/conn.php');

    $id = $_REQUEST['id'];

    if ($id == "") {
        $informacao = array(
            'tipo' => 'alert-danger',
            'conteudo' => 'O "id" do registro não foi informado!'
        );
    }else{
        $save = "DELETE FROM aluno WHERE id = ".$id."";
        if (mysqli_query($conecta, $save)){
            $informacao = array(
                'tipo' => 'alert-success',
                'conteudo' => 'Dado deletado com sucesso!!!'
            );
        }else{
            $informacao = array(
                'tipo' => 'alert-danger',
                'conteudo' => 'Dado não deletado!!!'
            );
        }
    }

    echo json_encode($informacao);   