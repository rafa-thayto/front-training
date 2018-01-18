const btnMudaLayout = document.querySelector('#btnMudaLayout');
const btnAjuda = document.querySelector('#btnAjuda');
const btnSync = document.querySelector('#btnSync');
const campoBusca = document.querySelector('.opcoesDaPagina-opcao');
const form = document.querySelector('.formNovoCartao');
const mural = document.querySelector('.mural');

      btnMudaLayout.addEventListener('click', mudaTexto);
      btnMudaLayout.addEventListener('click', mudaLayout);

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

btnMudaLayout.classList.remove('no-js');
// btnAjuda.classList.remove('no-js');
// btnSync.classList.remove('no-js');
// campoBusca.classList.remove('no-js');
// form.classList.remove('no-js');
