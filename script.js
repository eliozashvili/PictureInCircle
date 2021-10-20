'use strict';

const photo = document.querySelector('.photo');
const main = document.querySelector('.html');
const clickMe = document.querySelector('.click-me');

clickMe.addEventListener('click', function () {
    clickMe.style.display = 'none';
    photo.removeAttribute('hidden');
});

let count = 1;
photo.addEventListener('click', function () {
    count++;

    if (count === 5) {
        count = 1;
    }

    photo.src = `img_${count}.png`;
});