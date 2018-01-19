; (function () {
    const $form = $('.formNovoCartao');
    $form.removeClass('no-js');

    $form.on('submit', function (event) {
        event.preventDefault();
        const $campoConteudo = document.querySelector('.formNovoCartao-conteudo');
        const conteudo = $campoConteudo.value.trim();

        // !!
        // conteudo === ''
        if (!conteudo) {
            const $msgErro = document.createElement('msgErro');
            const msg = 'Não da pra enviar se você não escreveu nada seu bobo! xD xD';

            $msgErro.innerHTML = `
            <div class="formNovoCartao-msg">
                ${msg}
            </div>
            `;
            const $msgContent = $msgErro.querySelector('.formNovoCartao-msg');



            // $msgErro.addClass('formNovoCartao-msg');
            // $msgErro.textContent = 'Não da pra enviar se você não escreveu nada seu bobo! xD xD';

            $campoConteudo.insertAdjacentElement('afterend', $msgContent);

            $cartao.on('animationend', function () {
                $msgErro.remove();
            })
        } else {
            novoCartao(conteudo);
        }
        $campoConteudo.value = '';
    });

})();

