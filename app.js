const bars = document.querySelector('.bars');
const nav = document.querySelector('nav');

bars.addEventListener('click', function () {
    nav.classList.toggle('active');
})