;(function($) {

let contador = document.querySelectorAll('.cartao').length;
    
function criarCartao(conteudo, cor = '#EBEF40') {
        contador++;
        
        const $mural = document.querySelector('.mural');

    const $cartao = $(`
    <article id="cartao_${contador}" class="cartao" style="background: ${cor}" tabindex="0">
        <div class="opcoesDoCartao">
        <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
        <svg><use xlink:href="#iconeRemover"></use></svg>
        </button>
        <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" ${ cor ? '' : 'checked'}>
        <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
        Padrão
        </label>
        <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
        <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
        Importante
        </label>
        <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
        <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
        Tarefa
        </label>
        <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
        <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
        Inspiração
        </label>
        </div>
        <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
    </article>
    `);
    // $mural.insertAdjacentElement('afterbegin', $cartao);

    $('.mural').prepend($cartao);
    $cartao.on('focusin', function() {
        $cartao.addClass('cartao--focado');
    });

    $cartao.on('focusout', function() {
        $cartao.removeClass('cartao--focado');
    });

    // Delegate
    $cartao.on('change', '.opcoesDoCartao-radioTipo', function(event) {
        const $elementoAtual = $(event.target);
        // const isRadioTipo = $elementoAtual.addClass('opcoesDoCartao-radioTipo');

        // if(isRadioTipo) {

        const corNova = $elementoAtual.val();
        $cartao.css('background', corNova);
        // }
    });
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
    
}

window.criarCartao = criarCartao;

})(JQuery);
