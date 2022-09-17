//Botão dark/light mode
let lightToggle = document.querySelector('#lightButton');
let body = document.querySelector('body');
let navlinks = document.querySelector('.nav-links');
let logo = document.querySelector('.logo');

lightToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.navlinks.classList.toggle('light');
    document.logo.classList.toggle('light');
});