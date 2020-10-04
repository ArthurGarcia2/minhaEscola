function close_visu_na_page() {
    $('.btn_close').click(function(e) {
        e.preventDefault();
        $('#visu_na_page').empty();
        $('#visu_na_page').hide();
        $('.row').show()
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
            url: 'src/aluno/modelo/visu_listagem_aluno.php',
            success: function(informacoes) {

                $('.row').hide()
                $('#visu_na_page').show();

                $('#visu_na_page').load('src/aluno/visao/pagina_add_aluno.html', function() {
                    $('.btn-save').after('<button class="btn btn-secondary btn-block btn_close"><i class="mdi-close mdi"></i>Fechar</button>')
                    $('.btn-save').addClass('btn_saveChanges')
                    $('.btn-save').removeClass('btn-save')
                    $('.so_para_o_hide').hide()
                    $('h2').empty()
                    $('h2').append('Edição de Aluno Cadastrado')
                    $('#nome').val(informacoes[0].nome)
                    $('#curso').val(informacoes[0].curso)
                    $('#senha').val(informacoes[0].senha)
                    $('#tipo').append(`<option value="${informacoes[0].tipo}" selected>${informacoes[0].tipo == 1 ? 'Administrador' : 'Aluno'}</option>`)
                    $('#tipo').after(`<input type="hidden" name="id" id="id" value="${informacoes[0].id}">`)


                    close_visu_na_page();

                })
                $('body').append('<script src="src/aluno/controle/control_saveChanges_listagem.js"></script>');
            }
        })
    })
})