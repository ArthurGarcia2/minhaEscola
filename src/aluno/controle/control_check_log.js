$(document).ready(function() {

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/aluno/modelo/check_logout_aluno.php',
        success: function(informacoes) {

            if (informacoes.return == false) {
                $(location).attr('href', 'index.html');
            } else {
                $('#wellcome').append(`Seja muito bem vindo ${informacoes.nome}`)
            }

        }
    })

})