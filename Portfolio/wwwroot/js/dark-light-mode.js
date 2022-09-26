//Botão dark/light mode
let lightToggle = document.querySelector('#lightButton');
let body = document.querySelector('body');

lightToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
});