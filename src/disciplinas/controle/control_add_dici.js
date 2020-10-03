$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault();

        var dados = $('#form_add_dici').serialize();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/disciplinas/modelo/salvar_dici.php',
            success: function(dados) {
                $('#form_add_dici').after(`
                    <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                    <strong>${dados.conteudo}</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                `);

                $('#disciplina').val('');
                $('#professor').val('');
            }
        })
    })

})