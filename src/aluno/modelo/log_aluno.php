<?php

    include('../../conexao/conn.php');

    $id = $_REQUEST['id'];
    $senha = $_REQUEST['senha'];
    $senha = md5($senha);

    $sql = "SELECT * FROM aluno WHERE id = ".$id." AND  senha  = '".$senha."'";

    $resultado = mysqli_query($conecta, $sql);

    if ($resultado && mysqli_num_rows($resultado) > 0) {

        while($listagem = mysqli_fetch_array($resultado)){
            session_start();
            $_SESSION['id'] = $listagem['id'];
            $_SESSION['nome'] = $listagem['nome'];
            $_SESSION['tipo'] = $listagem['tipo'];
        }

        $info = array('result' => true);
    }else {
        $info = array('result' => false);
    }

    echo json_encode($info);