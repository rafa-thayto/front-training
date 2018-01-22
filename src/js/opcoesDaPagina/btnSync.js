;(function() {
    const $btn = $('#btnSync');

    $btn.click(function() {

        $btn.addClass('botaoSync--esperando');
        
        const xhr = new XMLHttpRequest();
        const $cartoes = $('.cartao');
        
        xhr.open('POST', 'http://ceep.herokuapp.com/cartoes/salvar/');
        
        xhr.setRequestHeader('Content-Type', 'application/json');

        const objeto = {
            usuario: 'rafa',
            // cartoes: Array.from($('.cartao'))
            cartoes: listaCartoes
        }

        // $cartoes.forEach(cartao => {
        //     objeto.cartoes.push(cartao.innerText);
        // });
        
        xhr.send(JSON.stringify(objeto));
        
        xhr.addEventListener('load', function() {
            $btn.removeClass('botaoSync--deuRuim');
            $btn.addClass('botaoSync--deuBom');
            $btn.removeClass('botaoSync--esperando');
        });
        
        xhr.addEventListener('error', function() {
            $btn.removeClass('botaoSync--deuBom');
            $btn.addClass('botaoSync--deuRuim');
            $btn.removeClass('botaoSync--esperando');
        });
        
    });
    
    $btn.removeClass('no-js');
})();
        