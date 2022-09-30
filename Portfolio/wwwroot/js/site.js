//Botão mostrar/esconder imagens

let toggle = document.querySelector('#toggle-button');
let imagens = document.querySelector('.lista-de-imagens');
imagens.style.display = 'none';
imagens.style.border = 'none';

toggle.addEventListener('click', () => {
    if (imagens.style.display == 'none') {
        imagens.style.transition = '500ms';
        imagens.style.display = 'block';
        toggle.innerHTML = 'Esconder';
    }
    else
    {
        imagens.style.display = 'none';
        toggle.innerHTML = 'Mostrar';
    }
});