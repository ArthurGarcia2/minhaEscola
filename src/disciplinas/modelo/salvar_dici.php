<?php

    include('../../conexao/conn.php');

    $disciplina = $_REQUEST['disciplina'];
    $professor = $_REQUEST['professor'];

    if ($disciplina == "" || $professor == "") {
        echo 'Algum campo não foi preenchido, recarregue a pagina e tente novamente';
    }else{
        $save = "INSERT INTO disciplinas(disciplina, professor) VALUES ('".$disciplina."', '".$professor."')";
        if (mysqli_query($conecta, $save)){
            echo 'Ta salvo "mermão"!';
        }else{
            echo 'Deu P.T. no salvamento, fassa novamente!';
        }
    }
