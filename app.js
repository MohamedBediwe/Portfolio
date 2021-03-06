const nav = document.querySelector('nav');
const header = document.querySelector('header')
const scrollToTop = document.querySelector('.scroll-to-top')

window.onscroll = function () {
    if (window.scrollY >= 600) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
    if (window.scrollY >= 450) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
scrollToTop.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}
