;(function() {
    const $form = document.querySelector('.formNovoCartao');
    $form.classList.remove('no-js');

    $form.addEventListener('submit', function(event) {
        event.preventDefault();
        const $campoConteudo = document.querySelector('.formNovoCartao-conteudo');
        const conteudo = $campoConteudo.value.trim();
        
        // !!
        // conteudo === ''
        if(!conteudo) {
            const $msgErro = document.createElement('div');

            $msgErro.classList.add('formNovoCartao-msg');
            $msgErro.textContent = 'Não da pra enviar nada seu bobo! xD xD';

            $campoConteudo.insertAdjacentElement('afterend', $msgErro);

            $msgErro.addEventListener('animationend', function() {
                $msgErro.remove();
            })
        } else {
            
        }
    });

})();

