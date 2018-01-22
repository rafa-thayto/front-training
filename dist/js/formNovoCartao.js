'use strict';

;(function () {
    var $form = document.querySelector('.formNovoCartao');

    $form.addEventListener('submit', function (event) {
        event.preventDefault();
        var $campoConteudo = document.querySelector('.formNovoCartao-conteudo');
        var conteudo = $campoConteudo.value.trim();

        // !!
        // conteudo === ''
        if (!conteudo) {
            // const $msgErro = document.createElement('msgErro');
            var msg = 'Não da pra enviar se você não escreveu nada seu bobo! xD xD';

            // $msgErro.innerHTML = `
            // <div class="formNovoCartao-msg">
            //     ${msg}
            // </div>
            // `;

            // // Imperativa
            var $msgErro = document.createElement('div');

            $msgErro.classList.add('formNovoCartao-msg');
            $msgErro.textContent = msg;

            document.querySelector('.formNovoCartao-salvar').insertAdjacentElement('beforebegin', $msgErro);

            $msgErro.addEventListener('animationend', function () {
                $msgErro.remove();
            });
        } else {
            criarCartao(conteudo);
        }
        $campoConteudo.value = '';
    });
    $form.classList.remove('no-js');
})();