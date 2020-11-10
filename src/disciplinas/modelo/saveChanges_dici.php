<?php

    include('../../conexao/conn.php');

    session_start();

    $disciplina = $_REQUEST['disciplina'];
    $professor = $_REQUEST['professor'];
    $id = $_REQUEST['id'];
    $nota = $_REQUEST['nota'];
    $id_aluno = $_SESSION['id'];

    if ($disciplina == "" || $professor == "") {
        echo 'Algum campo não foi preenchido, recarregue a pagina e tente novamente';
    }else{
        $save = "UPDATE disciplinas SET disciplina='".$disciplina."', professor='".$professor."', nota='".$nota."', id_aluno='".$id_aluno."' WHERE id=".$id." ";
        if (mysqli_query($conecta, $save)){
            $informacoes = array('return' => true);
        }else{
            $informacoes = array('return' => false);
        }
    }

    echo json_encode($informacoes);   