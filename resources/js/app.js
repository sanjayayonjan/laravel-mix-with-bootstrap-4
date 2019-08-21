import 'bootstrap/js/dist/modal';
import Swiper from 'swiper';

window.Popper = require('popper.js').default;

$(document).ready(function () {
    const test = new Swiper('.test', {
        slidesPerView: 5,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        centeredSlides: true,
        spaceBetween: 89,
    });

    console.log('This is a Test.');
});


