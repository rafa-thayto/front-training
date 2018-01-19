;(function() {
    const $btnAjuda = document.querySelector('#btnAjuda');
    $btnAjuda.classList.remove('#btnAjuda');

    $btnAjuda.addEventListener('click', () => {
        const ajudas = [
            'ajuda1',
            'ajuda2',
            'ajuda3',
            'ajuda4',
            'ajuda5',
            'ajuda6',
        ];

        ajudas.forEach(ajuda => alert(ajuda));
    })
})();
