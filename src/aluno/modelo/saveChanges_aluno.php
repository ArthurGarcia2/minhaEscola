<?php

    include('../../conexao/conn.php');

    $nome = $_REQUEST['nome'];
    $curso = $_REQUEST['curso'];
    $tipo = $_REQUEST['tipo'];
    $senha = $_REQUEST['senha'];
    $id = $_REQUEST['id'];

    if ($nome == "" || $curso == "" || $tipo == "") {
        echo 'Algum campo não foi preenchido, recarregue a pagina e tente novamente';
    }else{
        $save = "UPDATE aluno SET nome='".$nome."', curso='".$curso."', senha='".md5($senha)."', tipo=".$tipo." WHERE id=".$id." ";
        if (mysqli_query($conecta, $save)){
            $informacoes = array('return' => true);
        }else{
            $informacoes = array('return' => false);
        }
    }

    echo json_encode($informacoes);   