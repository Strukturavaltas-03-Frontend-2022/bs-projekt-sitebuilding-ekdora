const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const navbarBrand = document.querySelector('.navbar-brand');
let isOnTopState = true;

const scrollToEl = (id) => {
    document.querySelector(id).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
}

window.onscroll = () => {
    const isOnTop = window.scrollY === 0;
    if (isOnTopState !== isOnTop) {
        navbar.classList?.[isOnTop ? 'add' : 'remove']('navbar-bg');
        navbarBrand.classList?.[isOnTop ? 'remove' : 'add']('navbar-scrolled-color');
        navLinks.forEach((navLink) => {
            navLink.classList?.[isOnTop ? 'remove' : 'add']('navbar-scrolled-color');
        });
        isOnTopState = isOnTop;
    }
}