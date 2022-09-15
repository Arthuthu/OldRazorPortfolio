//Botão mostrar/esconder imagens

const toggleButton = document.querySelector('#toggleButton');
const divList = document.querySelector('.listaDeImagens');
divList.style.display = 'none';
divList.style.border = 'none';

toggleButton.addEventListener('click', () => {
    if (divList.style.display == 'none') {
        divList.style.display = 'block';
        toggleButton.innerHTML = 'Esconder';
    }
    else
    {
        divList.style.display = 'none';
        toggleButton.innerHTML = 'Mostrar';
    }
});