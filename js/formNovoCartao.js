;(function() {
    const $form = $('.formNovoCartao');
    $form.removeClass('no-js');

    $form.on('submit', function(event) {
        event.preventDefault();
        const $campoConteudo = document.querySelector('.formNovoCartao-conteudo');
        const conteudo = $campoConteudo.value.trim();
        
        // !!
        // conteudo === ''
        if(!conteudo) {
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
            
            $cartao.on('animationend', function() {
                $msgErro.remove();
            })
        } else {
            novoCartao(conteudo);
            $campoConteudo.value = '';
        }

        $cartao.on('keydown', function(event) {
            const $elementoAtual = $(event.target);
            const isLabel = $elementoAtual.addClass('opcoesDoCartao-tipo');
            
            if(isLabel && (event.key === ' ' || event.key === 'Enter')) {
                $elementoAtual.click();
            }
        });
            
        // Remove using delegate
        $cartao.on('click', '.opcoesDoCartao-remove',function(event) {
            const $elementoAtual = $(event.target);

            // if(isRemove) {
                $cartao.addClass('cartao--some');
                $cartao.on('transitionend', function() {
                    $cartao.remove();
                })
            // }
        });
        });
    
})();

