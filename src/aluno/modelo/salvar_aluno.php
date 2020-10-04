<?php

    include('../../conexao/conn.php');

    $senha = $_REQUEST['senha'];
    $nome = $_REQUEST['nome'];
    $curso = $_REQUEST['curso'];
    $tipo = $_REQUEST['tipo'];
    
    if ($nome == "" || $senha == "" || $curso == "" || $tipo == "") {
        echo 'Algum campo não foi preenchido, recarregue a pagina e tente novamente';
    }else{
        $save = "INSERT INTO aluno(nome, curso, senha, tipo) VALUES ('".$nome."', '".$curso."', '".md5($senha)."', ".$tipo.")";
        if (mysqli_query($conecta, $save)){
            $info = array(
                'tipo' => 'alert-success',
                'conteudo' => 'Dados cadastrados com sucesso!!!'
            );
        }else{
            $info = array(
                'tipo' => 'alert-danger',
                'conteudo' => 'Dados não cadastrados com sucesso!!!'
            );
        }
    }

    echo json_encode($info);   
