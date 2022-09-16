//Botão dark/light mode
let lightToggle = document.querySelector('#lightButton');
let body = document.querySelector('body');
let nav = document.querySelector('nav');

lightToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.nav.classList.toggle('light');
});