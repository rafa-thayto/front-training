const btn = document.querySelector('#btnMudaLayout');
const mural = document.querySelector('.mural');
      btn.addEventListener('click', mudaTexto);
      btn.addEventListener('click', mudaLayout);

function mudaTexto() {
    if(this.textContent == 'Blocos') { 
        this.textContent = 'Linhas';
    } else { 
        this.textContent = 'Blocos';
    }
}


function mudaLayout() {
    mural.classList.toggle('mural--linha');
}
