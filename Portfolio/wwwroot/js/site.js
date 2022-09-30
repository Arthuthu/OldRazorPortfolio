//Botão mostrar/esconder imagens

let toggle = document.querySelector('#toggle-button');
let divList = document.querySelector('.lista-de-imagens');
divList.style.display = 'none';
divList.style.border = 'none';

toggle.addEventListener('click', () => {
    if (divList.style.display == 'none') {
        divList.style.display = 'block';
        toggle.innerHTML = 'Esconder';
    }
    else
    {
        divList.style.display = 'none';
        toggle.innerHTML = 'Mostrar';
    }
});