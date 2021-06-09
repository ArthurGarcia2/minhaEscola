$(document).ready(function() {


    $('.mdi').click(function() {

        let estado = $(this).attr('data-status')

        if (estado == '1') {

            $('#senha').removeAttr('type', 'text');
            $('#senha').attr('type', 'password');

            $('.mdi').removeClass('mdi-eye');
            $('.mdi').addClass('mdi-eye-off');

            $('.mdi').removeAttr('data-status', '1');
            $('.mdi').attr('data-status', '0');

        } else {

            $('#senha').removeAttr('type', 'password');
            $('#senha').attr('type', 'text');

            $('.mdi').removeClass('mdi-eye-off');
            $('.mdi').addClass('mdi-eye');

            $('.mdi').removeAttr('data-status', '0');
            $('.mdi').attr('data-status', '1');
        }
    })
})