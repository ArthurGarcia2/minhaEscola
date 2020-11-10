$(document).ready(function() {

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/disciplinas/modelo/listagem_dici.php',
        success: function(informacoes) {
            for (var i = 0; i < informacoes.length; i++) {

                let expor_listagem = `
                    <tr>
                        <td class="text-center">${informacoes[i].id}</td>
                        <td>${informacoes[i].disciplina}</td>
                        <td>${informacoes[i].professor}</td>
                        <td>${informacoes[i].nota}</td>
                        <td class="text-center">
                            <button id="${informacoes[i].id}" class="btn btn-info btn_visu btn-sm"><i class="mdi mdi-eye"></i></button>
                            <button id="${informacoes[i].id}" class="btn btn-primary btn_edit btn-sm"><i class="mdi mdi-pencil"></i></button>
                            <button id="${informacoes[i].id}" class="btn btn-danger btn_del btn-sm"><i class="mdi mdi-trash-can"></i></button>
                        </td>
                    </tr>
                `
                $('tbody').append(expor_listagem);
            }
            $('body').append('<script src="src/disciplinas/controle/control_visu_listagem.js"></script>')
            $('body').append('<script src="src/disciplinas/controle/control_edit_listagem.js"></script>')
            $('body').append('<script src="src/disciplinas/controle/control_del_listagem.js"></script>')
        }

    })
})