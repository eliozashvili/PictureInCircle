'use strict';

const photo = document.querySelector('.photo');
const main = document.querySelector('.html');
const clickMe = document.querySelector('.click-me');

clickMe.addEventListener('click', function () {
    clickMe.style.display = 'none';
    photo.removeAttribute('hidden');
});

const img = ['img_1.png', 'img_2.png', 'img_3.png', 'img_4.png'];
let count = 0;

photo.addEventListener('click', function () {
    if (count === img.length)
        count = 0;

    photo.src = img[count];
    count++;
});