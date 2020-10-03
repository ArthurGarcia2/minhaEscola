function close_visu_na_page() {
    $('.btn_close').click(function(e) {
        e.preventDefault();
        $('#visu_na_page').empty();
        $('#visu_na_page').hide();
        $('.row').show()
    })
}

$(document).ready(function() {
    $('.btn_visu').on('click', function(e) {
        e.preventDefault();
        var informacoes = `id=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: informacoes,
            url: 'src/disciplinas/modelo/visu_listagem_dici.php',
            success: function(informacoes) {

                $('.row').hide()
                $('#visu_na_page').show();

                $('#visu_na_page').load('src/disciplinas/visao/pagina_add_dici.html', function() {
                    $('.btn-save').after('<button class="btn btn-secondary btn-block btn_close"><i class="mdi-close mdi"></i>Fechar</button>')
                    $('.btn-save').hide()
                    $('.so_para_o_hide').hide()
                    $('h2').empty()
                    $('h2').append('Visualização de Disciplina Cadastrada')
                    $('#disciplina').val(informacoes[0].disciplina)
                    $('#disciplina').attr('disabled', true)
                    $('#professor').val(informacoes[0].professor)
                    $('#professor').attr('disabled', true)

                    close_visu_na_page();

                })
            }
        })
    })
})