<?php

    include('../../conexao/conn.php');

    $disciplina = $_REQUEST['disciplina'];
    $professor = $_REQUEST['professor'];

    if ($disciplina == "" || $professor == "") {
        echo 'Algum campo não foi preenchido, recarregue a pagina e tente novamente';
    }else{
        $save = "INSERT INTO disciplinas(disciplina, professor) VALUES ('".$disciplina."', '".$professor."')";
        if (mysqli_query($conecta, $save)){
            $dados = array(
                'tipo' => 'alert-success',
                'conteudo' => 'Dados cadastrados com sucesso!!!'
            );
        }else{
            $dados = array(
                'tipo' => 'alert-danger',
                'conteudo' => 'Dados não cadastrados com sucesso!!!'
            );
        }
    }

    echo json_encode($dados);   
