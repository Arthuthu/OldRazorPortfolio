//Botão dark/light mode
let lightToggle = document.querySelector('#lightButton');
let body = document.querySelector('body');
var theme;

lightToggle.addEventListener('click', () => {
    if (document.body.classList == 'light') {
        document.body.classList.remove('light');   
    } else {
        document.body.classList.add('light');
        theme = "light";
    }
});