;(function(criarCartao) {
    
    const $btnAjuda = document.querySelector('#btnAjuda');
    $btnAjuda.classList.remove('no-js');

    $btnAjuda.addEventListener('click', () => {
        const ajudas = [
            {msg: 'ajuda1', cor: 'pink'},
            {msg: 'ajuda2', cor: 'white'},
            {msg: 'ajuda3', cor: 'lime'},
            {msg: 'ajuda4', cor: 'cyan'},
            {msg: 'ajuda5', cor: 'purple'}
        ];

        ajudas.reverse().forEach(ajuda => criarCartao(ajuda.msg, ajuda.cor));
    });
    
})(criarCartao);
