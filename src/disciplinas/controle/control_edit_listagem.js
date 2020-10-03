function close_edit_na_page() {
    $('.btn_close').click(function(e) {
        e.preventDefault();
        $('#visu_na_page').empty();
        $('#visu_na_page').hide();

        $('.row').show();
    })
}

$(document).ready(function() {
    $('.btn_edit').on('click', function(e) {
        e.preventDefault();
        var informacoes = `id=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: informacoes,
            url: 'src/disciplinas/modelo/visu_listagem_dici.php',
            success: function(informacoes) {

                $('#visu_na_page').show();
                $('.row').hide();

                $('#visu_na_page').load('src/disciplinas/visao/pagina_add_dici.html', function() {
                    $('.btn-save').after('<button class="btn btn-secondary btn-block btn_close"><i class="mdi-close mdi"></i>Fechar</button>')
                    $('.btn-save').addClass('btn_saveChanges')
                    $('.btn-save').removeClass('btn-save')
                    $('.so_para_o_hide').hide()
                    $('h2').empty()
                    $('h2').append('Edição de Disciplina Cadastrada')
                    $('#disciplina').val(informacoes[0].disciplina)
                    $('#professor').val(informacoes[0].professor)
                    $('#professor').after(`<input type="hidden" name="id" id="id" value="${informacoes[0].id}">`)

                    close_edit_na_page();

                })
                $('body').append('<script src="src/disciplinas/controle/control_saveChanges_listagem.js"></script>');
            }
        })
    })
})