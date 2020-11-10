$(document).ready(function() {

    $('.btn_log').click(function(e) {
        e.preventDefault();

        var info = $('#form_log').serialize();

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: info,
            url: 'src/aluno/modelo/log_aluno.php',
            success: function(info) {
                if (info.result == true) {
                    $(location).attr('href', 'panel.html')
                } else {
                    $('#form_log').after(`
                        <div class="alert alert-danger alert-dismissible fade show mt-5" role="alert">
                        <strong>ID ou senha incorreta!!! Por favor, tente novamente.</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    `);
                }

                $('#id').val('');
                $('#senha').val('');
            }
        })
    })
})