$(document).ready(function() {
    var maxAttempts = 3;
    var blockedTime = 30000; // 30 segundos
    var attemptCount = 0;
    var blocked = false;

    $('form').submit(function(event) {
        event.preventDefault();

        if (blocked) {
            alert('Você excedeu três tentativas. Aguarde 30 segundos e tente novamente.');
            return;
        }

        var username = $('#nome_usuario').val();
        var password = $('#senha_usuario').val();

        if (username === 'admin' && password === 'admin') {
            window.location.href = 'healthsys.html';
        } else {
            attemptCount++;

            if (attemptCount === maxAttempts) {
                blocked = true;
                setTimeout(function() {
                    blocked = false;
                    attemptCount = 0;
                    alert('Você tem 3 tentativas.');
                }, blockedTime);
            }

            alert('Nome de usuário ou senha incorretos. Tente novamente.');
        }
    });

    function showMessage(message) {
        $('#mensagem').text(message);
    }
});