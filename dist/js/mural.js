'use strict';

;(function ($) {

    // ${ cor ? '' : 'checked' }
    var contador = document.querySelectorAll('.cartao').length;

    // Parametro padrao: Default parameters
    function criarCartao(conteudo) {
        var cor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        contador++;
        // console.log('Criar cartao em construção', conteudo)

        // Criar o elemento
        // const $cartao = document.createElement('article')
        // $cartao.classList.add('cartao')
        // $cartao.setAttribute('tabindex', '0')

        // const $tagConteudo = document.createElement('p')
        // $tagConteudo.classList.add('cartao-conteudo')

        // Criar elemento de forma sonhadora: Declarativa
        var $cartao = $('\n    <article id="cartao_' + contador + '" style="background: ' + cor + ';" class="cartao" tabindex="0">\n        <div class="opcoesDoCartao">\n            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">\n            <svg><use xlink:href="#iconeRemover"></use></svg>\n            </button>            \n            <input type="radio" name="corDoCartao' + contador + '" value="#EBEF40" id="corPadr\xE3o-cartao' + contador + '" class="opcoesDoCartao-radioTipo" ' + (cor ? '' : 'checked') + '>\n            <label for="corPadr\xE3o-cartao' + contador + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">\n            Padr\xE3o\n            </label>\n        \n            <input type="radio" name="corDoCartao' + contador + '" value="#F05450" id="corImportante-cartao' + contador + '" class="opcoesDoCartao-radioTipo">\n            <label for="corImportante-cartao' + contador + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">\n            Importante\n            </label>\n        \n            <input type="radio" name="corDoCartao' + contador + '" value="#92C4EC" id="corTarefa-cartao' + contador + '" class="opcoesDoCartao-radioTipo">\n            <label for="corTarefa-cartao' + contador + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">\n            Tarefa\n            </label>\n        \n            <input type="radio" name="corDoCartao' + contador + '" value="#76EF40" id="corInspira\xE7\xE3o-cartao' + contador + '" class="opcoesDoCartao-radioTipo">\n            <label for="corInspira\xE7\xE3o-cartao' + contador + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">\n            Inspira\xE7\xE3o\n            </label>\n        </div>\n        <p class="cartao-conteudo" contenteditable tabindex="0">' + conteudo + '</p>\n    </article>\n    ');

        $cartao.on('focusin', function () {
            console.log('bagulhos');
            //console.log('Fazendo os bagulhos funcionarem')
            $cartao.addClass('cartao--focado');
        });

        $cartao.on('focusout', function () {
            //console.log('Fazendo os bagulhos funcionarem')
            $cartao.removeClass('cartao--focado');
        });

        // Adiciona evento e faz delegate
        $cartao.on('change', '.opcoesDoCartao-radioTipo', function (event) {
            var $elementoAtual = $(event.target);
            var novaCor = $elementoAtual.val();
            $cartao.css('background', novaCor);
        });

        $cartao.on('keydown', function (event) {
            var $elementoAtual = $(event.target);
            var isLabel = $elementoAtual.hasClass('opcoesDoCartao-opcao');
            // Quando? 
            if (isLabel && (event.key === 'Enter' || event.key === ' ')) {
                $elementoAtual.click();
            }
        });

        // Implementar o Remove com Delegate
        $cartao.on('click', function (event) {
            var $elementoAtual = $(event.target);
            var isRemove = $elementoAtual.hasClass('opcoesDoCartao-remove');

            if (isRemove) {
                $cartao.addClass('cartao--some');
                $cartao.on('transitionend', function () {
                    $cartao.remove();
                });
            }
        });

        $('.mural').prepend($cartao);
    }

    window.criarCartao = criarCartao;
})(jQuery);