$(document).ready(function() {

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/aluno/modelo/check_tipo.php',
        success: function(informacoes) {

            if (informacoes.tipo == 2) {

                $('.aluno').hide()

            } else {

                $('.aluno').show()

            }

        }
    })

})