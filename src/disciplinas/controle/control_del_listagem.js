function close_visu_na_page() {
    $('.btn_close').click(function(e) {
        e.preventDefault();
        $('#visu_na_page').empty();
        $('#visu_na_page').hide();
        $('.row').show()
    })
}

$(document).ready(function() {
    $('.btn_del').on('click', function(e) {
        e.preventDefault();
        var informacoes = `id=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: informacoes,
            url: 'src/disciplinas/modelo/del_listagem_dici.php',
            success: function(informacoes) {
                $('#visu_na_page').empty();
                $('#visu_na_page').append(`
                <div class="alert ${informacoes.tipo} alert-dismissible fade show" role="alert">
                <strong>${informacoes.conteudo}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                `)

                $('tbody').empty();
                $('body').append('<script src="src/disciplinas/controle/control_listagem_dici.js"></script>');
            }
        })
    })
})