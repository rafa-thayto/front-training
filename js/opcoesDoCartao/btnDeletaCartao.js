// Pega todos os elementos com a class 'opcoesDoCartao-remove'
const btnDelete = document.querySelectorAll('.opcoesDoCartao-remove');

// Adiciona o evento click em todos os btn
for(let i = 0; btnDelete.length; i++) {

  btnDelete[i].addEventListener('click', deleteCartao);
}

function deleteCartao() {
  const cartao = this.parentNode.parentNode;

  cartao.classList.add('cartao--some');
  
  cartao.addEventListener('transitionend', function() {
    cartao.remove();
  });
  
  // setTimeout(function() {
  //   cartao.remove();
  // }, 250);
}
