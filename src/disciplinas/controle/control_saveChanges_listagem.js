$(document).ready(function() {

    $('.btn_saveChanges').click(function(e) {
        e.preventDefault();

        var informacoes = $('#form_add_dici').serialize();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: informacoes,
            url: 'src/disciplinas/modelo/saveChanges_dici.php',
            success: function(informacoes) {
                if (informacoes.return == true) {
                    $('#visu_na_page').empty();
                    $('#visu_na_page').hide();
                    $('.row').show();
                } else {
                    alert("Algo Deu Errado!!!");
                }
            }
        })
    })

})