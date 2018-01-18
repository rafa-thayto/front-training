;(function() {
    const $cartoes = document.querySelectorAll('.cartao');

    for(let $cartao of $cartoes) {
        $cartao.addEventListener('focusin', function() {
            $cartao.classList.add('cartao--focado');
        });

        $cartao.addEventListener('focusout', function() {
            $cartao.classList.remove('cartao--focado');
        });

        // Delegate
        $cartao.addEventListener('change', function(event) {
            const $elementoAtual = event.target;
            const isRadioTipo = $elementoAtual.classList.contains('opcoesDoCartao-radioTipo');

            if(isRadioTipo) {
                const corNova = $elementoAtual.value;
                $cartao.style.background = corNova;
            }
        });

        $cartao.addEventListener('keydown', function(event) {
            const $elementoAtual = event.target;
            const isLabel = $elementoAtual.classList.contains('opcoesDoCartao-tipo');
            
            if(isLabel && (event.key === ' ' || event.key === 'Enter')) {
                $elementoAtual.click();
            }
        });
        
    }
})();
