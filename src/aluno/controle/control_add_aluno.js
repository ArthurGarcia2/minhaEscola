$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault();

        var info = $('#form_add_aluno').serialize();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: info,
            url: 'src/aluno/modelo/salvar_aluno.php',
            success: function(info) {
                $('#form_add_aluno').after(`
                    <div class="alert ${info.tipo} alert-dismissible fade show" role="alert">
                    <strong>${info.conteudo}</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                `);

                $('#nome').val('');
                $('#curso').val('');
                $('#senha').val('');
                $('#tipo').val('');
            }
        })
    })

})