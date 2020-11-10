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
            url: 'src/aluno/modelo/visu_listagem_aluno.php',
            success: function(informacoes) {

                $('.row').hide()
                $('#visu_na_page').show();

                $('#visu_na_page').load('src/aluno/visao/pagina_add_aluno.html', function() {
                    $('.btn-save').after('<button class="btn btn-secondary btn-block btn_close"><i class="mdi-close mdi"></i>Fechar</button>')
                    $('.btn-save').hide()
                    $('.so_para_o_hide').hide()
                    $('h2').empty()
                    $('h2').append('Visualização de Aluno Cadastrada')
                    $('#nome').val(informacoes[0].nome)
                    $('#nome').attr('disabled', true)
                    $('#curso').val(informacoes[0].curso)
                    $('#curso').attr('disabled', true)
                    $('#senha').val(informacoes[0].md5(senha))
                    $('#senha').attr('disabled', true)

                    $('#tipo').empty()
                    $('#tipo').append(`<option>${informacoes[0].tipo == 1 ? 'Administrador' : 'Aluno'}</option>`)
                    $('#tipo').attr('disabled', true)

                    close_visu_na_page();

                })
            }
        })
    })
})