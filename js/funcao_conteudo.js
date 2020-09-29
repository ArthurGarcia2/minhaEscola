$(document).ready(function() {

    $('#butao_add_dici').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplinas/visao/pagina_add_dici.html')
    })

    $('#butao_listagem_dici').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/disciplinas/visao/listagem_dici.html')
    })

})