<?php

    include('../../conexao/conn.php');

    $disciplina = $_REQUEST['disciplina'];
    $professor = $_REQUEST['professor'];
    $id = $_REQUEST['id'];

    if ($disciplina == "" || $professor == "") {
        echo 'Algum campo não foi preenchido, recarregue a pagina e tente novamente';
    }else{
        $save = "UPDATE diciplinas SET disciplina='".$disciplina."', professor='".$professor."' WHERE id=".$id." ";
        if (mysqli_query($conecta, $save)){
            $informacoes = array('return' => true);
        }else{
            $informacoes = array('return' => false);
        }
    }

    echo json_encode($informacoes);   