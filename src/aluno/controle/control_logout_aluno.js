$(document).ready(function() {

    $('#logout').click(function(e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            url: 'src/aluno/modelo/logout_aluno.php',
            success: function(informacoes) {

                if (informacoes.result == true) {
                    $(location).attr('href', 'index.html');
                } else {
                    alert("Não existes usuario logado");
                }

            }
        })

    })

})