$(document).ready(function() {

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/aluno/modelo/listagem_aluno.php',
        success: function(informacoes) {
            for (var i = 0; i < informacoes.length; i++) {

                let expor_listagem = `
                    <tr>
                        <td class="text-center">${informacoes[i].id}</td>
                        <td>${informacoes[i].nome}</td>
                        <td>${informacoes[i].curso}</td>
                        <td>${informacoes[i].tipo == 1 ? 'Administrador' : 'Aluno'}</td>
                        <td class="text-center">
                            <button id="${informacoes[i].id}" class="btn btn-info btn_visu btn-sm"><i class="mdi mdi-eye"></i></button>
                            <button id="${informacoes[i].id}" class="btn btn-primary btn_edit btn-sm"><i class="mdi mdi-pencil"></i></button>
                            <button id="${informacoes[i].id}" class="btn btn-danger btn_del btn-sm"><i class="mdi mdi-trash-can"></i></button>
                        </td>
                    </tr>
                `
                $('tbody').append(expor_listagem);
            }
            $('body').append('<script src="src/aluno/controle/control_visu_listagem.js"></script>')
            $('body').append('<script src="src/aluno/controle/control_edit_listagem.js"></script>')
            $('body').append('<script src="src/aluno/controle/control_del_listagem.js"></script>')
        }

    })
})