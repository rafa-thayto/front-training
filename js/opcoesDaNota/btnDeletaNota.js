// Pega todos os elementos com a class 'opcoesDoCartao-remove'
const btnDelete = document.querySelectorAll('.opcoesDoCartao-remove');

// Adiciona o evento click em todos os btn
for(let i = 0; btnDelete.length; i++) {
  btnDelete[i].addEventListener('click', deleteNote);
}

function deleteNote() {
  this.parentNode.parentNode.remove();
}
