'use strict';

;(function (criarCartao) {

    var $btnAjuda = document.querySelector('#btnAjuda');

    // Usuario
    // Clica
    // Ajuda aparece

    // Dev
    // Cadastrar um evento: Event Listener
    $btnAjuda.addEventListener('click', function () {
        var ajudas = [{ msg: 'Voce pode add cartao', cor: 'pink' }, { msg: 'Remover cartao', cor: 'lime' }, { msg: 'Mudar a cor', cor: 'orange' }, { msg: 'Você pode arrumar a coluna', cor: 'silver' }, { msg: '"Acessivelzaodaporra"', cor: 'white' }];

        ajudas.reverse().forEach(function (ajuda) {
            return criarCartao(ajuda.msg, ajuda.cor);
        });

        // Implementação do "forEach"
        // function forEach(array, funcaoCallback) {
        //     for(item of array) {
        //         funcaoCallback(item)
        //     }
        // }
    });

    $btnAjuda.classList.remove('no-js');
})(criarCartao);