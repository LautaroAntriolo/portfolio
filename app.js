const menu = document.querySelector('.menu');
const footer = document.getElementById('footer');
const btnBurger = document.querySelector('#burger-menu');
const ipad = window.matchMedia('screen and (max-width: 767px)');

ipad.addListener(validation);

document.addEventListener('DOMContentLoaded', footerDOM);


function validation(event) {
    if (event.matches) {
        btnBurger.addEventListener('click', hideShow);
    }
}
validation(ipad);

function hideShow() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }
}

function footerDOM() {
    const year = new Date().getFullYear();
    const name = 'Lautaro Luis Antriolo';

    footer.textContent = `${name} - ${year}`;
}


