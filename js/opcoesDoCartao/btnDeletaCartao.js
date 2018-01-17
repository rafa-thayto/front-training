// (IIFE)
(function() {

  // Pega todos os elementos com a class 'opcoesDoCartao-remove'
  const btn = document.querySelectorAll('.opcoesDoCartao-remove');
  
  // Adiciona o evento click em todos os btn
  for(let i = 0; btn.length; i++) {
    btn[i].addEventListener('click', function() {
      const cartao = this.parentNode.parentNode;
      
      cartao.classList.add('cartao--some');
      
      cartao.addEventListener('transitionend', function() {
        cartao.remove();
      });
      
      // setTimeout(function() {
        //   cartao.remove();
        // }, 300);
    });
  }
  
  

})()
    